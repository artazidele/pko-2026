package org.example.pko2.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@PlanningEntity
@JsonIdentityInfo(scope = Visit.class,
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Visit {

    @PlanningId
    private long id;
    private Item item;
    private VisitType visitType;
    private long serviceTime;
    private String carNumber;

    private Location location;

    @InverseRelationShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference
    private Car car;

    @PreviousElementShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference
    private Visit previousVisit;

    @CascadingUpdateShadowVariable(targetMethodName = "setArrivalTime")
    private Long arrivalTime;

    public void setArrivalTime() {
        if (previousVisit == null && car == null) {
            arrivalTime = null;
            return;
        }
        var departureTime = previousVisit == null
                ? car.getDriver().getTimeWindow().getFrom()
                : previousVisit.getArrivalTime() + previousVisit.getServiceTime() + getDriverWaitingTime(previousVisit);
        var previousLocation = previousVisit == null ? car.getGarage().getLocation() : previousVisit.getLocation();

        arrivalTime = departureTime > 0 ? departureTime + location.timeTo(previousLocation) : null;
    }

    @JsonIgnore
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
}
