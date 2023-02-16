package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Seat {

    @Id
    private int id;
    private int capacity;
    private int rows;
    @OneToOne
    private SeatTier tier;
    @ManyToMany( mappedBy = "seats")
    Set<Screen> screens;

}
