package org.example.pko2;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import lombok.extern.slf4j.Slf4j;
import org.example.pko2.domain.Solution;
import org.example.pko2.domain.SolutionJsonIO;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;

@Slf4j
//@SpringBootApplication
public class BenchmarkApp {

    public static void main(String[] args) {

        PlannerBenchmarkFactory benchmarkFactoryXML = PlannerBenchmarkFactory
                .createFromXmlResource("BenchmarkConfig.xml");

        var solutionJsonIO = new SolutionJsonIO();
        var solution = new Solution();

        solutionJsonIO.write(solution.createSolution(5, 40), new File("local/data/example-data-1.json"));
        solutionJsonIO.write(solution.createSolution(5, 80), new File("local/data/example-data-2.json"));
        solutionJsonIO.write(solution.createSolution(5, 120), new File("local/data/example-data-3.json"));
        solutionJsonIO.write(solution.createSolution(5, 160), new File("local/data/example-data-4.json"));
        solutionJsonIO.write(solution.createSolution(5, 200), new File("local/data/example-data-5.json"));

        PlannerBenchmark benchmark = benchmarkFactoryXML.buildPlannerBenchmark();
        benchmark.benchmarkAndShowReportInBrowser();
    }
}
