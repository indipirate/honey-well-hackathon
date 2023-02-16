package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Seat {

    @Id
    private int id;
    private int capacity;
    private int rows;
    @OneToOne
    private SeatTier tier;

}
