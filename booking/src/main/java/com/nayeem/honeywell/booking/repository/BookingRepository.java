package com.nayeem.honeywell.booking.repository;

import com.nayeem.honeywell.booking.entiry.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
}
