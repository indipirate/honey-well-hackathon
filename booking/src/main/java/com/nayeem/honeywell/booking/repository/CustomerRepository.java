package com.nayeem.honeywell.booking.repository;

import com.nayeem.honeywell.booking.entiry.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
