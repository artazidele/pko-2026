package org.example.pko2.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Customer extends Person {

    private long id;
    private CustomerType customerType;
    private List<TimeWindow> timeWindows;
    private Location location;
}
