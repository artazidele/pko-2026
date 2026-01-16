package org.example.pko2.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpenRouteServiceResponse {

    private double[][] distances;
    private double[][] durations;
}
