package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.service.MovieService;

public class MovieServiceImpl implements MovieService {

    private final MovieService movieService;

    public MovieServiceImpl(MovieService movieService) {
        this.movieService = movieService;
    }
}
