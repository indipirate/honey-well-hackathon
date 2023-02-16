package com.nayeem.honeywell.booking.controller;

import com.nayeem.honeywell.booking.entiry.Screen;
import com.nayeem.honeywell.booking.service.ScreenService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/screen")
public class ScreenController {

    private final ScreenService screenService;

    public ScreenController(ScreenService screenService) {
        this.screenService = screenService;
    }

    @GetMapping("/movie/{movieId}")
    public List<Screen> findByMovieId(@PathVariable int movieId) {
        return screenService.fetchByMovieId(movieId);
    }
}
