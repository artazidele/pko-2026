package org.example.pko2.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Driver extends Person {

    private long id;
    private TimeWindow timeWindow;
    private long driverLunchTime;
}
