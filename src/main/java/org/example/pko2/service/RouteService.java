package org.example.pko2.service;

import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardmediumsoftlong.HardMediumSoftLongScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import lombok.extern.slf4j.Slf4j;
import org.example.pko2.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static java.util.Optional.ofNullable;
import static org.example.pko2.domain.VisitType.SERVICE;
import static org.example.pko2.domain.VisitType.SUPPLY;

@Slf4j
@Service
public class RouteService {

    private Solution solvedSolution;
    private List<Long> notServedItemIds = new ArrayList<>();
    private Map<Long, Integer> customerVisitedCars = new HashMap<>();

    public boolean itemIsNotServed(Long itemId) {
        return notServedItemIds.contains(itemId);
    }

    public Solution getSolution() {
        return ofNullable(solvedSolution).orElseGet(Solution::new);
    }

    public void setSolution(int carCount, int itemCount) {
        var newSolution = new Solution();
        var problem = newSolution.createSolution(carCount, itemCount);
        SolverFactory<Solution> solverFactoryFromXML = SolverFactory
                .createFromXmlResource("SolverConfig.xml");
        Solver<Solution> solver = solverFactoryFromXML.buildSolver();
        solvedSolution = solver.solve(problem);

        SolutionManager<Solution, HardMediumSoftLongScore> solutionManager = SolutionManager.create(solverFactoryFromXML);
        ScoreExplanation<Solution, HardMediumSoftLongScore> scoreExplanation = solutionManager.explain(solvedSolution);
        log.info(scoreExplanation.getSummary());

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/itemNotServed")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    car.getNotServedItems().forEach(item -> notServedItemIds.add(item.getId()));
                });

        notServedItemIds.forEach(notServedItemId -> log.info("Not served item: {}", notServedItemId));
        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/possibleMileageExceeded")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    log.info("Possible mileage exceeded: car = {}, m = {}", car, car.getExceededMileage());
                });

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/minimizeTotalDistance")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    log.info("Minimized distance: car = {}, distance = {} meters", car.getId(), car.getMinimizedDistance());
                });

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/minimizeTotalTime")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    log.info("Minimized time: car = {}, time = {} seconds", car.getId(), car.getMinimizedTime());
                });

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/minimizeDriverWaitingTime")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    log.info("Driver waiting time: car = {}, time = {} seconds", car.getId(), car.getDriverWaitingTime());
                });

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/noServiceVisitForEachCar")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    log.info("No service visit: car = {}", car.getId());
                });

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/driverTimeWindowExceededSeconds")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var car = (Car) match.getIndictedObjectList().get(0);
                    log.info("Driver time window exceeded: car = {}, time = {} seconds", car.getId(), car.driverTimeWindowExceededSeconds());
                });

        scoreExplanation.getConstraintMatchTotalMap()
                .get("org.example.pko2.domain/minimizeCustomerServiceCars")
                .getConstraintMatchSet()
                .forEach(match -> {
                    var visit = (Visit) match.getIndictedObjectList().get(0);
                    log.info("Customer visited times: visit = {}, customer = {}", visit.getId(), visit.getItem().getCustomer().getId());
                    var visitedTimes = customerVisitedCars.getOrDefault(visit.getItem().getCustomer().getId(), 1) + 1;
                    customerVisitedCars.put(visit.getItem().getCustomer().getId(), visitedTimes);
                });
    }

    public String formatTime(Long seconds) {
        var hours = seconds / 3600;
        var minutes = seconds % 3600 / 60;
        var second = (seconds % 3600) % 60;
        return String.format("%d : %d : %d", hours, minutes, second);
    }

    public String formatTimeWindows(Customer customer) {
        var timeWindowString = new StringBuilder();

        for (TimeWindow timeWindow : customer.getTimeWindows()) {
            var formattedStartTime = formatTime(timeWindow.getFrom());
            var formattedEndTime = formatTime(timeWindow.getTo());
            timeWindowString.append("[").append(formattedStartTime).append(" - ").append(formattedEndTime).append("] ");
        }

        return timeWindowString.toString();
    }

    public String getDriverTimeWindowByCarId(Long carId) {
        return solvedSolution.getCars().stream()
                .filter(car -> carId.equals(car.getId()))
                .findAny()
                .map(Car::getDriver)
                .map(Driver::getTimeWindow)
                .map(this::formatDriverTimeWindow)
                .orElse("Driver not found");
    }

    private String formatDriverTimeWindow(TimeWindow timeWindow) {
        return formatTime(timeWindow.getFrom()) + " - " + formatTime(timeWindow.getTo());
    }

    public List<Visit> getSupplyVisits(List<Visit> allVisits) {
        return allVisits.stream().filter(visit -> visit.getVisitType() == SUPPLY).collect(Collectors.toList());
    }

    public List<Visit> getServiceVisits() {
        return solvedSolution == null || solvedSolution.getCars().isEmpty()
                ? null
                : solvedSolution.getVisits().stream().filter(visit -> visit.getVisitType() == SERVICE).collect(Collectors.toList());
    }

    public Long getDepotIdByLocation(Location location) {
        return solvedSolution.getDepots().stream()
                .filter(depot -> depot.getLocation().getLongitude() == location.getLatitude()
                 && depot.getLocation().getLongitude() == location.getLongitude())
                .findAny()
                .map(Depot::getId)
                .orElse(null);
    }

    public String getServiceVisitTimeByCar(Car car) {
        return solvedSolution.getVisits().stream()
                .filter(visit -> visit.getVisitType() == SERVICE && visit.getCar().equals(car))
                .findAny()
                .map(this::getServiceVisitTimeStr)
                .orElse("NO SERVICE VISIT");
    }

    private String getServiceVisitTimeStr(Visit visit) {
        return formatTime(visit.getArrivalTime()) + " - " + formatTime(visit.getArrivalTime() + visit.getServiceTime());
    }

    public Double getDistanceFromPreviousVisit(Visit visit) {
        return visit.getPreviousVisit() != null
                ? solvedSolution.getMatrix().getDistances()[(int) visit.getPreviousVisit().getLocation().getId() - 1][(int) visit.getLocation().getId() - 1]
                : solvedSolution.getMatrix().getDistances()[(int) visit.getCar().getGarage().getLocation().getId() - 1][(int) visit.getLocation().getId() - 1];
    }

    public String getTimeFromPreviousVisit(Visit visit) {
        return visit.getPreviousVisit() != null
                ? formatTime(Math.round(solvedSolution.getMatrix().getDurations()[(int) visit.getPreviousVisit().getLocation().getId() - 1][(int) visit.getLocation().getId() - 1]))
                : formatTime(Math.round(solvedSolution.getMatrix().getDurations()[(int) visit.getCar().getGarage().getLocation().getId() - 1][(int) visit.getLocation().getId() - 1]));
    }

    public String getDriverWaitingTimeStr(Visit visit) {
        long waitingTime = 0L;
        var customer = visit.getItem().getCustomer();
        for (TimeWindow timeWindow : customer.getTimeWindows()) {
            if (visit.getArrivalTime() >= timeWindow.getFrom() && visit.getArrivalTime() + visit.getServiceTime() <= timeWindow.getTo()) {
                break;
            } else if (visit.getArrivalTime() < timeWindow.getFrom()) {
                waitingTime = timeWindow.getFrom() - visit.getArrivalTime();
                break;
            }
        }

        return formatTime(waitingTime);
    }

    public Double getTotalDistanceUntilVisit(Visit visit) {
        double totalDistance = 0;
        List<Visit> visits = visit.getCar().getVisits();
        for (Visit visit1 : visits) {
            totalDistance += getDistanceFromPreviousVisit(visit1);
            if (visit == visit1) {
                break;
            }
            if (visit1.getVisitType() == SERVICE) {
                totalDistance = 0;
            }
        }
        return totalDistance;
    }

    public double getTotalDistanceUntilGarage(Car car) {
        var visitCount = car.getVisits().size();
        Visit lastVisit = visitCount > 0
                ? car.getVisits().get(visitCount - 1)
                : null;
        return lastVisit != null
                ? getTotalDistanceUntilVisit(lastVisit)
                + solvedSolution.getMatrix().getDistances()[(int) lastVisit.getLocation().getId() - 1][(int) car.getGarage().getLocation().getId() - 1]
                : 0;
    }

    public Long getDriverWaitingTime(Visit visit) {
        long waitingTime = 0L;
        if (visit.getItem() == null) {
            return waitingTime;
        }
        var customer = visit.getItem().getCustomer();
        for (TimeWindow timeWindow : customer.getTimeWindows()) {
            if (visit.getArrivalTime() >= timeWindow.getFrom() && visit.getArrivalTime() + visit.getServiceTime() <= timeWindow.getTo()) {
                break;
            } else if (visit.getArrivalTime() < timeWindow.getFrom()) {
                waitingTime = timeWindow.getFrom() - visit.getArrivalTime();
                break;
            }
        }

        return waitingTime;
    }

    public Integer getCustomerVisitedCars(Visit visit) {
        return customerVisitedCars.getOrDefault(visit.getItem().getCustomer().getId(), 1);
    }

    public String getDriverWorkingTimeExceededStr(Car car) {
        var endTime = car.getTimeFromLastVisit() + car.getServiceTimeAfter();
        var exceededTime = endTime - car.getDriver().getTimeWindow().getTo();

        return exceededTime > 0
                ? formatTime(exceededTime)
                : "0";
    }

    public double getPossibleMileageExceeded(Car car) {
        var mileageExceeded = car.getTotalDistanceWithoutGarage() - car.getPossibleMileage();

        return mileageExceeded > 0
                ? mileageExceeded
                : 0;
    }
}
