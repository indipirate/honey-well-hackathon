package com.nayeem.honeywell.booking.repository;

import com.nayeem.honeywell.booking.entiry.Screen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ScreenRepository extends JpaRepository<Screen, Integer> {


    List<Screen> findByMovieId(int movieId);

}
