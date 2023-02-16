package com.nayeem.honeywell.booking.service;

import com.nayeem.honeywell.booking.entiry.Screen;

import java.util.List;

public interface ScreenService {
    List<Screen> fetchByMovieId(int movieId);
}
