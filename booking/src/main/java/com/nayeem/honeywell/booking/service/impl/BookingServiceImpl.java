package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.repository.BookingRepository;
import com.nayeem.honeywell.booking.service.BookingService;
import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
}
