package org.example.pko2.solver;

import ai.timefold.solver.core.api.score.buildin.hardmediumsoftlong.HardMediumSoftLongScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.example.pko2.domain.*;
import org.jspecify.annotations.NonNull;


public class SolutionScoreCalculator implements ConstraintProvider {

    public static final String POSSIBLE_MILEAGE_EXCEEDED = "possibleMileageExceeded";
    public static final String ITEM_NOT_SERVED = "itemNotServed";
    public static final String MINIMIZE_TOTAL_TIME = "minimizeTotalTime";
    public static final String MINIMIZE_TOTAL_DISTANCE = "minimizeTotalDistance";
    public static final String MINIMIZE_DRIVER_WAITING_TIME = "minimizeDriverWaitingTime";
    public static final String MINIMIZE_CUSTOMER_SERVICE_CARS = "minimizeCustomerServiceCars";
    public static final String DRIVER_TIME_WINDOW_EXCEEDED_SECONDS = "driverTimeWindowExceededSeconds";
    public static final String NO_SERVICE_VISIT_FOR_EACH_CAR = "noServiceVisitForEachCar";

    @Override
    public Constraint @NonNull [] defineConstraints(@NonNull ConstraintFactory constraintFactory) {
        return new Constraint[]{
                itemNotServed(constraintFactory),
                noServiceVisitForEachCar(constraintFactory),
                driverTimeWindowExceededSeconds(constraintFactory),
                minimizeDriverWaitingTime(constraintFactory),
                minimizeCustomerServiceCars(constraintFactory),
                possibleMileageExceeded(constraintFactory),
                minimizeTotalTime(constraintFactory),
                minimizeTotalDistance(constraintFactory)
        };
    }

    public Constraint noServiceVisitForEachCar(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .filter(Car::noServiceVisit)
                .penalize(HardMediumSoftLongScore.ONE_HARD)
                .asConstraint(NO_SERVICE_VISIT_FOR_EACH_CAR);
    }

    public Constraint driverTimeWindowExceededSeconds(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .filter(car -> car.driverTimeWindowExceededSeconds() > 0)
                .penalizeLong(HardMediumSoftLongScore.ONE_MEDIUM, Car::driverTimeWindowExceededSeconds)
                .asConstraint(DRIVER_TIME_WINDOW_EXCEEDED_SECONDS);
    }

    public Constraint possibleMileageExceeded(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .filter(car -> car.getTotalDistanceWithoutGarage() - car.getPossibleMileage() > 0)
                .penalizeLong(HardMediumSoftLongScore.ONE_MEDIUM,
                        car -> (long) (car.getTotalDistanceWithoutGarage() - car.getPossibleMileage()))
                .asConstraint(POSSIBLE_MILEAGE_EXCEEDED);
    }

    public Constraint itemNotServed(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .filter(car -> car.getNotServedItemCount() > 0)
                .penalizeLong(HardMediumSoftLongScore.ONE_HARD, car -> car.getNotServedItemCount() * 10000L)
                .asConstraint(ITEM_NOT_SERVED);
    }

    public Constraint minimizeTotalTime(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .penalizeLong(HardMediumSoftLongScore.ONE_SOFT, Car::getTotalTime)
                .asConstraint(MINIMIZE_TOTAL_TIME);
    }

    public Constraint minimizeTotalDistance(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .penalizeLong(HardMediumSoftLongScore.ONE_SOFT,
                        car -> Math.round(car.getTotalDistance()))
                .asConstraint(MINIMIZE_TOTAL_DISTANCE);
    }

    public Constraint minimizeDriverWaitingTime(ConstraintFactory factory) {
        return factory.forEach(Car.class)
                .penalizeLong(HardMediumSoftLongScore.ONE_SOFT,
                        Car::getDriverWaitingTime)
                .asConstraint(MINIMIZE_DRIVER_WAITING_TIME);
    }

    public Constraint minimizeCustomerServiceCars(ConstraintFactory factory) {
        return factory.forEachUniquePair(Visit.class,
                        Joiners.equal(v -> v.getItem() == null ? null : v.getItem().getCustomer()),
                        Joiners.lessThan(Visit::getId))
                .filter((v1, v2) ->
                        v1.getItem() != null &&
                                v2.getItem() != null &&
                                v1.getItem().getCustomer() != null &&
                                v2.getItem().getCustomer() != null &&
                                !v1.getCar().equals(v2.getCar()))
                .penalize(HardMediumSoftLongScore.ONE_SOFT)
                .asConstraint(MINIMIZE_CUSTOMER_SERVICE_CARS);
    }
}
