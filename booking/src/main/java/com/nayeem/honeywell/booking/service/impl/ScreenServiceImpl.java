package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.repository.ScreenRepository;
import com.nayeem.honeywell.booking.service.ScreenService;
import org.springframework.stereotype.Service;

@Service
public class ScreenServiceImpl implements ScreenService {

    private final ScreenRepository screenRepository;


    public ScreenServiceImpl(ScreenRepository screenRepository) {
        this.screenRepository = screenRepository;
    }
}
