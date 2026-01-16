package org.example.pko2.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
public class Location {

    private long id;
    private double latitude;
    private double longitude;

    @JsonBackReference
    private Solution solution;

    public Double distanceTo(Location fromLocation) {
        return solution == null ? 3000.0 * fromLocation.getId()
                : solution.getMatrix().getDistances()[(int) fromLocation.getId() - 1][(int) this.getId() - 1];
    }

    public long timeTo(Location fromLocation) {
        return solution == null ? 300 * fromLocation.getId()
                : Math.round(solution.getMatrix().getDurations()[(int) fromLocation.getId()-1][(int) this.getId()-1]);
    }
}
