package org.example.pko2.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardmediumsoftlong.HardMediumSoftLongScore;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.example.pko2.service.OpenRouteService;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static org.example.pko2.domain.CustomerType.DELIVERY;
import static org.example.pko2.domain.CustomerType.PICKUP;
import static org.example.pko2.domain.VisitType.SERVICE;
import static org.example.pko2.domain.VisitType.SUPPLY;

@Getter
@Setter
@PlanningSolution
@NoArgsConstructor
@Slf4j
public class Solution {

    private OpenRouteService openRouteService;

    private OpenRouteServiceResponse matrix;

    private long id;

    @PlanningScore
    private HardMediumSoftLongScore score;

    @PlanningEntityCollectionProperty
    private List<Car> cars = new ArrayList<>();

    @PlanningEntityCollectionProperty
    @ValueRangeProvider
    private List<Visit> visits = new ArrayList<>();

    @JsonManagedReference
    @ProblemFactCollectionProperty
    private List<Location> locations = new ArrayList<>();

    @JsonIgnore
    private List<Depot> depots = new ArrayList<>();

    public Solution createSolution(int carCount, int itemCount) {
        var solution = new Solution();
        var matrixService = new OpenRouteService();
        solution.setId(1L);

        var depotCount = Math.round((float) itemCount / 40) + 1;
        var customerCount = itemCount - Math.round((float) itemCount / 5);

        var lastLocationId = 1L;
        var lastTimeWindowId = 1L;

        var lastCarId = 1L;
        var lastDriverId = 1L;
        var lastGarageId = 1L;

        var lastItemId = 1L;
        var lastVisitId = 1L;

        var lastCustomerId = 1L;
        var lastDepotId = 1L;

        for (int i = 0; i < carCount; i++) {
            var driverTimeWindow = this.createDriverTimeWindow(lastTimeWindowId++);
            var driver = this.createDriver(lastDriverId++, driverTimeWindow);
            var garageLocation = this.createLocation(lastLocationId++, solution);
            var garage = this.createGarage(lastGarageId++, garageLocation);
            var car = this.createCar(lastCarId++, driver, garage);
            solution.locations.add(garageLocation);
            solution.cars.add(car);
        }

        List<Depot> depots = new ArrayList<>();
        for (int i = 0; i < depotCount; i++) {
            var depotLocation = this.createLocation(lastLocationId++, solution);
            var depot = this.createDepot(lastDepotId++, depotLocation);
            solution.locations.add(depotLocation);
            depots.add(depot);
        }

        List<Customer> customers = new ArrayList<>();
        for (int i = 0; i < customerCount; i++) {
            List<TimeWindow> timeWindows = this.createCustomerTimeWindows(lastTimeWindowId, lastCustomerId);
            lastTimeWindowId = lastTimeWindowId + lastCustomerId % 3 + 1;
            var customerLocation = this.createLocation(lastLocationId++, solution);
            var customer = this.createCustomer(lastCustomerId++, timeWindows, customerLocation);
            customers.add(customer);
            solution.locations.add(customerLocation);
        }

        for (int i = 0; i < itemCount; i++) {
            var item = this.createItem(lastItemId++, depots.get(i % depotCount), customers.get(i % customerCount));
//            var location = this.createLocation(lastLocationId++, solution);
            var visit = this.createSupplyVisit(lastVisitId++, item, customers.get(i % customerCount).getLocation());
            solution.visits.add(visit);
//            solution.locations.add(location);
        }

        for (int i = 0; i < carCount; i++) {
            var visit = this.createServiceVisit(lastVisitId++, solution.cars.get(i));
            solution.visits.add(visit);
        }

        for (int i = 0; i < carCount; i++) {
            for (int j = 0; j < depotCount; j++) {
                var visit = this.createSupplyDepotVisit(lastVisitId++, depots.get(j));
                solution.visits.add(visit);
            }
        }

        List<double[]> locations = solution.getLocations().stream()
                .map(location -> new double[]{ location.getLongitude(), location.getLatitude() })
                .toList();
        solution.setMatrix(matrixService.setMatrix(locations));

        return solution;
    }

    public Location createLocation(long id, Solution solution) {
        var random = new Random();
        double rigaLatitudeSouth = 56.8574;
        double rigaLatitudeNorth = 57.0856;
        double rigaLongitudeWest = 23.9323;
        double rigaLongitudeEast = 24.3245;
        double latitude = rigaLatitudeSouth + (rigaLatitudeNorth - rigaLatitudeSouth) * random.nextDouble();
        double longitude = rigaLongitudeWest + (rigaLongitudeEast - rigaLongitudeWest) * random.nextDouble();

        return new Location(id, latitude, longitude, solution);
    }

    public Car createCar(long id, Driver driver, Garage garage) {
        var car = new Car();
        car.setId(id);
        car.setNumber(String.format("LV - %d%d", id, id + 11));
        car.setAvailableSize(18000000 + (int)(Math.random() * 9000000));
        car.setGarage(garage);
        car.setDriver(driver);
        car.setServiceTimeBefore(300 + (int)(Math.random() * 600));
        car.setServiceTimeBetween(300 + (int)(Math.random() * 900));
        car.setServiceTimeAfter(60 + (int)(Math.random() * 300));
        car.setPossibleMileage(70000 + (int)(Math.random() * 70000));

        return car;
    }

    public Garage createGarage(long id, Location location) {
        return new Garage(id, location);
    }

    public Depot createDepot(long id, Location location) {
        return new Depot(id, location);
    }

    public TimeWindow createDriverTimeWindow(long id) {
        return new TimeWindow(id, 28800 + (long)(Math.random() * 7200), 57600 + (long)(Math.random() * 10800));
    }

    public Driver createDriver(long id, TimeWindow timeWindow) {
        var driver = new Driver(id, timeWindow, 900 + (long)(Math.random() * 2700));
        driver.setName(String.format("Name%d", id));
        driver.setSurname(String.format("Surname%d", id));

        return driver;
    }

    public List<TimeWindow> createCustomerTimeWindows(long id, long customerId) {
        var timeWindowCount = customerId % 3 + 1;
        List<TimeWindow> timeWindows = new ArrayList<>();
        var timeFrom = 28800 + (long)(Math.random() * 7200);
        for (int i = 0; i < timeWindowCount; i++) {
            var timeTo = timeFrom + 3600 + (long)(Math.random() * 7200);
            timeWindows.add(new TimeWindow(id + i, timeFrom, timeTo));
            timeFrom = timeTo + 5400;
        }

        return timeWindows;
    }

    public Customer createCustomer(long id, List<TimeWindow> timeWindows, Location location) {
        var customer = new Customer();
        customer.setId(id);
        customer.setCustomerType((int) id % 2 == 0 ? DELIVERY : PICKUP);
        customer.setTimeWindows(timeWindows);
        customer.setLocation(location);
        customer.setName(String.format("Name%d", id));
        customer.setSurname(String.format("Surname%d", id));

        return customer;
    }

    public Item createItem(long id, Depot depot, Customer customer) {
        var size = 180000 + (int)(Math.random() * 1800000);

        return new Item(id, depot, size, customer);
    }

    public Visit createServiceVisit(long id, Car car) {
        var visit = new Visit();
        visit.setId(id);
        visit.setVisitType(SERVICE);
        visit.setLocation(car.getGarage().getLocation());
        visit.setServiceTime(car.getServiceTimeBetween() + car.getDriver().getDriverLunchTime());
        visit.setCarNumber(car.getNumber());

        return visit;
    }

    public Visit createSupplyVisit(long id, Item item, Location location) {
        var visit = new Visit();
        visit.setId(id);
        visit.setVisitType(SUPPLY);
        visit.setItem(item);
        visit.setLocation(location);
        visit.setServiceTime(60 + (int)(Math.random() * 600));

        return visit;
    }

    public Visit createSupplyDepotVisit(long id, Depot depot) {
        var visit = new Visit();
        visit.setId(id);
        visit.setVisitType(SUPPLY);
        visit.setLocation(depot.getLocation());
        visit.setServiceTime(1800L);

        return visit;
    }
}
