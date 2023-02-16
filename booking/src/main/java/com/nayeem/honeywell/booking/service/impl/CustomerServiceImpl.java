package com.nayeem.honeywell.booking.service.impl;

import com.nayeem.honeywell.booking.repository.CustomerRepository;
import com.nayeem.honeywell.booking.service.CustomerService;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
}
