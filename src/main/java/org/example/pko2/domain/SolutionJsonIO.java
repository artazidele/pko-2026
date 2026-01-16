package org.example.pko2.domain;

import ai.timefold.solver.jackson.impl.domain.solution.JacksonSolutionFileIO;

public class SolutionJsonIO extends JacksonSolutionFileIO {

    public SolutionJsonIO() {
        super(Solution.class);
    }
}
