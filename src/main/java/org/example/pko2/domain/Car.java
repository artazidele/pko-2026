package org.example.pko2.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.PlanningListVariable;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.example.pko2.domain.CustomerType.DELIVERY;
import static org.example.pko2.domain.CustomerType.PICKUP;
import static org.example.pko2.domain.VisitType.SERVICE;
import static org.example.pko2.domain.VisitType.SUPPLY;

@PlanningEntity
@Getter
@Setter
@NoArgsConstructor
@JsonIdentityInfo(scope = Car.class,
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Car {

    private long id;
    private String number;
    private Integer availableSize;
    private Garage garage;
    private Driver driver;
    private long serviceTimeBefore;
    private long serviceTimeAfter;
    private long serviceTimeBetween;
    private double possibleMileage;

    @JsonIgnore
    private List<Item> notServedItems = new ArrayList<>();
    @JsonIgnore
    private double exceededMileage = 0;
    @JsonIgnore
    private double minimizedDistance = 0;
    @JsonIgnore
    private long minimizedTime = 0L;

    @JsonIdentityReference
    @PlanningListVariable
    private List<Visit> visits = new ArrayList<>();

    @JsonIgnore
    public boolean noServiceVisit() {
        for (Visit visit : this.visits) {
            if (visit.getVisitType() == SERVICE && visit.getCarNumber().equals(this.number)) {
                return false;
            }
        }

        return true;
    }

    @JsonIgnore
    public double getTotalDistanceUntilVisit(Visit destinationVisit) {
        var totalDistance = 0.0;
        Location prevLoc = this.getGarage().getLocation();
        for (Visit visit: this.getVisits()) {
            totalDistance += prevLoc.distanceTo(visit.getLocation());
            prevLoc = visit.getLocation();

            if (visit.getId() == destinationVisit.getId()) {
                break;
            }
        }
        return totalDistance;
    }

    @JsonIgnore
    public double getTotalDistance() {
        var totalDistance = 0.0;
        Location prevLoc = this.garage.getLocation();
        for (Visit visit: this.visits) {
            totalDistance += prevLoc.distanceTo(visit.getLocation());
            prevLoc = visit.getLocation();
        }
        totalDistance += prevLoc.distanceTo(this.garage.getLocation());
        setMinimizedDistance(totalDistance);
        return totalDistance;
    }

    @JsonIgnore
    public long getTotalTime() {
        var totalTime = 0L;
        Location prevLoc = this.garage.getLocation();
        for (Visit visit: this.visits) {
            totalTime += prevLoc.timeTo(visit.getLocation());
            prevLoc = visit.getLocation();
        }
        totalTime += prevLoc.timeTo(this.garage.getLocation());
        setMinimizedTime(totalTime);
        return totalTime;
    }

    @JsonIgnore
    public long driverTimeWindowExceededSeconds() {
        var driverEndTime = getTimeFromLastVisit() + getServiceTimeAfter();
        var exceededTime = driverEndTime - driver.getTimeWindow().getTo();

        return exceededTime > 0 ? exceededTime : 0L;
    }

    @JsonIgnore
    public long getNotServedItemCount() {
        List<Item> pickedItems = new ArrayList<>();
        List<Item> servedItems = new ArrayList<>();
        visits.stream().filter(visit -> visit.getItem() != null)
                .forEach(visit -> notServedItems.add(visit.getItem()));
        var filledVolume = 0;
        var servedItemCount = 0L;
        for (int i = 0; i < this.visits.size(); i++) {
            var visit = this.visits.get(i);
            if (visit.getVisitType() == SERVICE) {
                continue;
            }
            if (visit.getItem() != null) {
                List<TimeWindow> customerTimeWindows = visit.getItem().getCustomer().getTimeWindows();
                for (var customerTimeWindow: customerTimeWindows) {
                    if (visit.getArrivalTime() >= customerTimeWindow.getFrom()
                            && visit.getArrivalTime() + visit.getServiceTime() <= customerTimeWindow.getTo()
                            || visit.getArrivalTime() < customerTimeWindow.getTo()) {
                        if (visit.getItem().getCustomer().getCustomerType() == DELIVERY
                                && pickedItems.contains(visit.getItem())) {
                            filledVolume -= visit.getItem().getSize();
                            pickedItems.remove(visit.getItem());
                            servedItemCount ++;
                            servedItems.add(visit.getItem());
                            break;
                        }
                        if (visit.getItem().getCustomer().getCustomerType() == PICKUP
                                && visit.getItem().getSize() <= this.availableSize - filledVolume) {
                            filledVolume += visit.getItem().getSize();
                            pickedItems.add(visit.getItem());
                            break;
                        }
                    }
                }
            } else {
                for (int j = i - 1; j >= 0; j--) {
                    var v = visits.get(j);
                    if (v.getVisitType() == SUPPLY && v.getItem() == null && v.getLocation() == visit.getLocation()) {
                        break;
                    }
                    if (v.getItem() != null && v.getItem().getCustomer().getCustomerType() == PICKUP
                            && v.getItem().getDepot().getLocation() == visit.getLocation()
                            && pickedItems.contains(v.getItem())) {
                        filledVolume -= v.getItem().getSize();
                        pickedItems.remove(v.getItem());
                        servedItemCount ++;
                        servedItems.add(v.getItem());
                    }
                }
                for (int j = i + 1; j < this.visits.size(); j++) {
                    var v = visits.get(j);
                    if (v.getVisitType() == SUPPLY && v.getItem() == null && v.getLocation() == visit.getLocation()) {
                        break;
                    }
                    if (v.getItem() != null && v.getItem().getCustomer().getCustomerType() == DELIVERY
                            && v.getItem().getDepot().getLocation() == visit.getLocation()
                            && v.getItem().getSize() <= this.availableSize - filledVolume) {
                            filledVolume += v.getItem().getSize();
                            pickedItems.add(v.getItem());
                    }
                }
            }
        }
        List<Item> allItems = new ArrayList<>(this.visits.stream()
                .map(Visit::getItem)
                .filter(Objects::nonNull)
                .toList());
        servedItems.forEach(allItems::remove);
        setNotServedItems(allItems);
        return this.visits.stream().filter(visit -> visit.getItem() != null).count() - servedItemCount;
    }

    @JsonIgnore
    public long getTimeFromLastVisit() {
        Visit lastVisit =  !this.visits.isEmpty()
                ? this.visits.get(this.visits.size() - 1)
                : null;

        return lastVisit != null
                ? lastVisit.getArrivalTime() + lastVisit.getServiceTime() + lastVisit.getDriverWaitingTime(lastVisit)
                + this.garage.getLocation().timeTo(lastVisit.getLocation())
                : 0;
    }

    @JsonIgnore
    public double getTotalDistanceWithoutGarage() {
        var totalDistanceTemp = 0.0;
        var totalDistanceWithoutGarage = 0.0;
        Location prevLoc = this.garage.getLocation();
        for (Visit visit: this.visits) {
            if (visit.getVisitType() == SERVICE) {
                totalDistanceTemp += prevLoc.distanceTo(visit.getLocation());
                totalDistanceWithoutGarage = Math.max(totalDistanceWithoutGarage, totalDistanceTemp);
                totalDistanceTemp = 0.0;
            } else {
                totalDistanceTemp += prevLoc.distanceTo(visit.getLocation());
            }
            prevLoc = visit.getLocation();
        }
        totalDistanceTemp += prevLoc.distanceTo(this.garage.getLocation());
        totalDistanceWithoutGarage = Math.max(totalDistanceWithoutGarage, totalDistanceTemp);
        exceededMileage += (totalDistanceWithoutGarage - possibleMileage);
        return totalDistanceWithoutGarage;
    }

    @JsonIgnore
    public long getDriverWaitingTime() {
        var waitingTime = 0L;
        for (Visit visit: this.visits) {
            if (visit.getVisitType() == SERVICE || visit.getItem() == null) {
                continue;
            }
            List<TimeWindow> customerTimeWindows = visit.getItem().getCustomer().getTimeWindows();
            for (TimeWindow timeWindow : customerTimeWindows) {
                if (visit.getArrivalTime() >= timeWindow.getFrom() && visit.getArrivalTime() + visit.getServiceTime() <= timeWindow.getTo()) {
                    break;
                } else if (visit.getArrivalTime() < timeWindow.getFrom()) {
                    waitingTime += timeWindow.getFrom() - visit.getArrivalTime();
                    break;
                }
            }
        }
        return waitingTime;
    }
}
