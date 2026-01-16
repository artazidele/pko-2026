package org.example.pko2.domain;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
public class Location {

    private long id;
    private double latitude;
    private double longitude;

    private Solution solution;

    public Double distanceTo(Location fromLocation) {
            return solution.getMatrix().getDistances()[(int) fromLocation.getId() - 1][(int) this.getId() - 1];
    }

    public long timeTo(Location fromLocation) {
            return Math.round(solution.getMatrix().getDurations()[(int) fromLocation.getId()-1][(int) this.getId()-1]);
    }
}
