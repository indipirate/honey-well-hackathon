package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.repository.ShowRepository;
import com.nayeem.honeywell.booking.service.ShowService;
import org.springframework.stereotype.Service;

@Service
public class ShowServiceImpl implements ShowService {

    private final ShowRepository showRepository;

    public ShowServiceImpl(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }
}
