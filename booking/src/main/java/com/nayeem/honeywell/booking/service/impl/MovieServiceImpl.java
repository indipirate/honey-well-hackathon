package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.entiry.Movie;
import com.nayeem.honeywell.booking.repository.MovieRepository;
import com.nayeem.honeywell.booking.service.MovieService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;

    }

    @Override
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }
}
