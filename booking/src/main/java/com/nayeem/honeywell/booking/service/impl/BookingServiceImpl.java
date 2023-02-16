package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.repository.BookingRepository;
import com.nayeem.honeywell.booking.service.BookingService;

public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
}
