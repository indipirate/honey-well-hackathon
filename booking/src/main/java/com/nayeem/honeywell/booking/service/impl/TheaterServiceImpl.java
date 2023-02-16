package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.repository.TheaterRepository;
import com.nayeem.honeywell.booking.service.TheaterService;
import org.springframework.stereotype.Service;

@Service
public class TheaterServiceImpl implements TheaterService {

    private final TheaterRepository theaterRepository;

    public TheaterServiceImpl(TheaterRepository theaterRepository) {
        this.theaterRepository = theaterRepository;
    }
}
