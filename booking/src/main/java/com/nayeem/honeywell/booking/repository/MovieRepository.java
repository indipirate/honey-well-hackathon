package com.nayeem.honeywell.booking.repository;

import com.nayeem.honeywell.booking.entiry.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
}
