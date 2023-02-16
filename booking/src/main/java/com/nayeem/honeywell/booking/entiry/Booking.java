package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Booking {

    @Id
    private int id;

    @OneToOne
    private Customer customer;

    @OneToOne
    private Screen screen;

    @OneToMany
    private List<Seat> selectedSeats;

    @OneToOne
    private Theater theater;

}
