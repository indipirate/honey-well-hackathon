package com.nayeem.honeywell.booking.controller;

import com.nayeem.honeywell.booking.entiry.Movie;
import com.nayeem.honeywell.booking.service.MovieService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService  movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> fetchAll(){
        return movieService.getAll();
    }

}
