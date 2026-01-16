package org.example.pko2.controller;

import lombok.RequiredArgsConstructor;
import org.example.pko2.service.RouteService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class RouteController {

    private final RouteService routeService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("service", routeService);
        return "index";
    }

    @PostMapping("/solve")
    public String solve(@RequestParam Integer carCount, @RequestParam Integer itemCount) {
        routeService.setSolution(carCount, itemCount);
        return "redirect:/api/";
    }
}
