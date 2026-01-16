package org.example.pko2.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OpenRouteServiceRequest {
    private List<double[]> locations;
    private List<String> metrics;

    public OpenRouteServiceRequest(List<double[]> locations) {
        this.locations = locations;
        this.metrics = List.of("distance", "duration");
    }
}
