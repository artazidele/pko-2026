package org.example.pko2;

import ai.timefold.solver.test.api.score.stream.ConstraintVerifier;
import lombok.RequiredArgsConstructor;
import org.example.pko2.domain.*;
import org.example.pko2.solver.SolutionScoreCalculator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@RequiredArgsConstructor
public class SolutionScoreCalculatorTests {

    private ConstraintVerifier<SolutionScoreCalculator, Solution> verifier;
    private Solution solution;

    @BeforeEach
    void setup() {
        verifier = ConstraintVerifier.build(
                new SolutionScoreCalculator(),
                Solution.class,
                Car.class,
                Visit.class
        );
        solution = new Solution();
    }

    @Test
    void shouldPenalizeItemNotServed() {
        var currentSolution = solution.createSolution(1, 1);

        var customerTimeWindow = new TimeWindow(1, 0, 10);
        List<TimeWindow> customerTimeWindows = List.of(customerTimeWindow);
        var visit = currentSolution.getVisits().stream().filter(v -> v.getItem() != null)
                .findAny()
                .orElse(null);

        var driverTimeWindow = new TimeWindow(2, 100, 1000);
        var car = currentSolution.getCars().stream()
                .findAny()
                .orElse(null);

        if (visit != null && car != null) {
            visit.getItem().getCustomer().setTimeWindows(customerTimeWindows);
            car.getDriver().setTimeWindow(driverTimeWindow);
            car.setVisits(List.of(visit));
            visit.setCar(car);
            visit.setArrivalTime(driverTimeWindow.getFrom());
            currentSolution.setCars(List.of(car));
            currentSolution.setVisits(List.of(visit));
        } else {
            return;
        }

        verifier.verifyThat(SolutionScoreCalculator::itemNotServed)
                .given(currentSolution.getCars().get(0))
                .penalizesBy(10000);
    }

    @Test
    void shouldNotPenalizeItemNotServed() {
        var currentSolution = solution.createSolution(1, 1);

        var customerTimeWindow = new TimeWindow(1, 0, 3600);
        List<TimeWindow> customerTimeWindows = List.of(customerTimeWindow);
        var visit = currentSolution.getVisits().stream().filter(v -> v.getItem() != null)
                .findAny()
                .orElse(null);

        var driverTimeWindow = new TimeWindow(2, 0, 3600);
        var car = currentSolution.getCars().stream()
                .findAny()
                .orElse(null);

        if (visit != null && car != null) {
            visit.getItem().getCustomer().setTimeWindows(customerTimeWindows);
            car.getDriver().setTimeWindow(driverTimeWindow);
            visit.setArrivalTime(customerTimeWindow.getFrom());
            currentSolution.setCars(List.of(car));
            currentSolution.getVisits().removeIf(v -> v.getItem() != null);
            currentSolution.getVisits().forEach(v -> {
                v.setCar(car);
                car.getVisits().add(v);
            });
            visit.setCar(car);
            currentSolution.getVisits().add(visit);
        } else {
            return;
        }

        verifier.verifyThat(SolutionScoreCalculator::itemNotServed)
                .given(currentSolution.getCars().get(0))
                .penalizesBy(0);
    }

    @Test
    void shouldPenalizeNoServiceVisitForEachCar() {
        var car = new Car();

        verifier.verifyThat(SolutionScoreCalculator::noServiceVisitForEachCar)
                .given(car)
                .penalizesBy(1);
    }

    @Test
    void shouldNotPenalizeNoServiceVisitForEachCar() {
        var driverTimeWindow = solution.createDriverTimeWindow(1);
        var driver = solution.createDriver(1, driverTimeWindow);
        var garageLocation = solution.createLocation(1, solution);
        var garage = solution.createGarage(1, garageLocation);
        var car = solution.createCar(1, driver, garage);
        var visit = solution.createServiceVisit(1, car);
        car.getVisits().add(visit);

        verifier.verifyThat(SolutionScoreCalculator::noServiceVisitForEachCar)
                .given(car)
                .penalizesBy(0);
    }

    @Test
    void shouldPenalizeDriverTimeWindowExceededSeconds() {
        var currentSolution = solution.createSolution(1, 0);

        var driverTimeWindow = new TimeWindow(1, 0, 0);
        var car = currentSolution.getCars().stream()
                .findAny()
                .orElse(null);

        if (car != null) {
            car.getDriver().setTimeWindow(driverTimeWindow);
            currentSolution.setCars(List.of(car));
            currentSolution.getVisits().forEach(v -> {
                v.setCar(car);
                v.setArrivalTime(driverTimeWindow.getFrom());
                car.getVisits().add(v);
            });
        } else {
            return;
        }

        verifier.verifyThat(SolutionScoreCalculator::driverTimeWindowExceededSeconds)
                .given(currentSolution.getCars().get(0))
                .penalizesByMoreThan(0);
    }

    @Test
    void shouldNotPenalizeDriverTimeWindowExceededSeconds() {
        var currentSolution = solution.createSolution(1, 0);

        var driverTimeWindow = new TimeWindow(1, 0, 86400);
        var car = currentSolution.getCars().stream()
                .findAny()
                .orElse(null);

        if (car != null) {
            car.getDriver().setTimeWindow(driverTimeWindow);
            currentSolution.setCars(List.of(car));
            currentSolution.getVisits().forEach(v -> {
                v.setCar(car);
                v.setArrivalTime(driverTimeWindow.getFrom());
                car.getVisits().add(v);
            });
        } else {
            return;
        }

        verifier.verifyThat(SolutionScoreCalculator::driverTimeWindowExceededSeconds)
                .given(currentSolution.getCars().get(0))
                .penalizes(0);
    }

    @Test
    void shouldPenalizeMinimizeDriverWaitingTime() {
        var currentSolution = solution.createSolution(1, 1);

        var driverTimeWindow = new TimeWindow(1, 0, 86400);
        var car = currentSolution.getCars().stream()
                .findAny()
                .orElse(null);

        var customerTimeWindow = new TimeWindow(2, 7200, 14400);
        List<TimeWindow> customerTimeWindows = List.of(customerTimeWindow);

        if (car != null) {
            car.getDriver().setTimeWindow(driverTimeWindow);
            currentSolution.setCars(List.of(car));
            currentSolution.getVisits().stream().filter(v -> v.getItem() == null).forEach(v -> {
                v.setCar(car);
                v.setArrivalTime(driverTimeWindow.getFrom());
                car.getVisits().add(v);
            });
            currentSolution.getVisits().stream().filter(v -> v.getItem() != null).forEach(v -> {
                v.getItem().getCustomer().setTimeWindows(customerTimeWindows);
                v.setCar(car);
                v.setArrivalTime(driverTimeWindow.getFrom());
                car.getVisits().add(v);
            });
        } else {
            return;
        }

        verifier.verifyThat(SolutionScoreCalculator::minimizeDriverWaitingTime)
                .given(currentSolution.getCars().get(0))
                .penalizesBy(7200);
    }

    @Test
    void shouldNotPenalizeMinimizeDriverWaitingTime() {
        var currentSolution = solution.createSolution(1, 1);

        var driverTimeWindow = new TimeWindow(1, 0, 86400);
        var car = currentSolution.getCars().stream()
                .findAny()
                .orElse(null);

        List<TimeWindow> customerTimeWindows = List.of(driverTimeWindow);

        if (car != null) {
            car.getDriver().setTimeWindow(driverTimeWindow);
            currentSolution.setCars(List.of(car));
            currentSolution.getVisits().forEach(v -> {
                v.setCar(car);
                v.setArrivalTime(driverTimeWindow.getFrom());
                car.getVisits().add(v);
            });
            currentSolution.getVisits().stream().filter(v -> v.getItem() != null).forEach(v -> {
                v.getItem().getCustomer().setTimeWindows(customerTimeWindows);
            });
        } else {
            return;
        }

        verifier.verifyThat(SolutionScoreCalculator::minimizeDriverWaitingTime)
                .given(currentSolution.getCars().get(0))
                .penalizesBy(0);
    }

    @Test
    void shouldPenalizeMinimizeCustomerServiceCars() {
        var currentSolution = solution.createSolution(2, 2);

        var car1 = currentSolution.getCars().get(0);
        var car2 = currentSolution.getCars().get(1);
        List<Visit> customerVisits = currentSolution.getVisits().stream().filter(v -> v.getItem() != null).toList();
        var customer = customerVisits.get(0).getItem().getCustomer();

        currentSolution.getVisits().stream().filter(v -> v.getItem() != null)
                .forEach(v -> v.getItem().setCustomer(customer));
        currentSolution.getVisits().stream().filter(v -> v.getId() == customerVisits.get(0).getId()).findAny()
                .ifPresent(v -> {
                    v.setCar(car1);
                    car1.getVisits().add(v);
                });
        currentSolution.getVisits().stream().filter(v -> v.getId() == customerVisits.get(1).getId()).findAny()
                .ifPresent(v -> {
                    v.setCar(car2);
                    car2.getVisits().add(v);
                });

        verifier.verifyThat(SolutionScoreCalculator::minimizeCustomerServiceCars)
                .givenSolution(currentSolution)
                .penalizesBy(1);
    }

    @Test
    void shouldNotPenalizeMinimizeCustomerServiceCars() {
        var currentSolution = solution.createSolution(2, 2);

        var car = currentSolution.getCars().get(0);
        List<Visit> customerVisits = currentSolution.getVisits().stream().filter(v -> v.getItem() != null).toList();
        var customer = customerVisits.get(0).getItem().getCustomer();

        currentSolution.getVisits().stream().filter(v -> v.getItem() != null).forEach(v -> {
            v.getItem().setCustomer(customer);
            v.setCar(car);
            car.getVisits().add(v);
        });

        verifier.verifyThat(SolutionScoreCalculator::minimizeCustomerServiceCars)
                .givenSolution(currentSolution)
                .penalizesBy(0);
    }

    @Test
    void shouldPenalizePossibleMileageExceeded() {
        var currentSolution = solution.createSolution(1, 2);

        currentSolution.getCars().forEach(car -> car.setPossibleMileage(0.0));
        var car = currentSolution.getCars().get(0);
        currentSolution.getVisits().forEach(v -> {
            v.setCar(car);
            car.getVisits().add(v);
        });

        verifier.verifyThat(SolutionScoreCalculator::possibleMileageExceeded)
                .given(car)
                .penalizesByMoreThan(0);
    }

    @Test
    void shouldNotPenalizePossibleMileageExceeded() {
        var currentSolution = solution.createSolution(1, 2);

        verifier.verifyThat(SolutionScoreCalculator::possibleMileageExceeded)
                .given(currentSolution.getCars().get(0))
                .penalizes(0);
    }

    @Test
    void shouldPenalizeMinimizeTotalTime() {
        var currentSolution = solution.createSolution(1, 2);

        var car = currentSolution.getCars().get(0);
        currentSolution.getVisits().forEach(v -> {
            v.setCar(car);
            car.getVisits().add(v);
        });

        verifier.verifyThat(SolutionScoreCalculator::minimizeTotalTime)
                .given(car)
                .penalizesByMoreThan(0);
    }

    @Test
    void shouldPenalizeMinimizeTotalDistance() {
        var currentSolution = solution.createSolution(1, 2);

        var car = currentSolution.getCars().get(0);
        currentSolution.getVisits().forEach(v -> {
            v.setCar(car);
            car.getVisits().add(v);
        });

        verifier.verifyThat(SolutionScoreCalculator::minimizeTotalDistance)
                .given(car)
                .penalizesByMoreThan(0);
    }
}
