package org.example.pko2.service;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.example.pko2.domain.OpenRouteServiceRequest;
import org.example.pko2.domain.OpenRouteServiceResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

@Slf4j
@Service
@Getter
public class OpenRouteService {

    private final WebClient webClient;

    public OpenRouteService() {
        Properties props = new Properties();
        try (FileInputStream fis = new FileInputStream("config.properties")) {
            props.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }

        var apiKey = props.getProperty("API_KEY");

        this.webClient = WebClient.builder()
                .baseUrl("https://api.openrouteservice.org")
                .defaultHeader(HttpHeaders.AUTHORIZATION, apiKey)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    public OpenRouteServiceResponse setMatrix(List<double[]> locations) {
        var locationSize = locations.size();
        if (locationSize > 50) {
            return setDefaultMatrix(locations, locationSize);
        }

        OpenRouteServiceRequest request = new OpenRouteServiceRequest(locations);

        return webClient.post()
                .uri("/v2/matrix/driving-car")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(OpenRouteServiceResponse.class)
                .block();
    }

    private OpenRouteServiceResponse setDefaultMatrix(List<double[]> locations, int locationSize) {
        var response = new OpenRouteServiceResponse();
        double[][] distances = new double[locationSize][locationSize];
        double[][] durations = new double[locationSize][locationSize];
        for (int i = 0; i < locationSize; i++) {
            for (int j = 0; j < locationSize; j++) {
                distances[i][j] = 3000.0 + (Math.random() * 500.0);
                durations[i][j] = 300.0 + (Math.random() * 600.0);
            }
        }
        response.setDistances(distances);
        response.setDurations(durations);

        return response;
    }
}
