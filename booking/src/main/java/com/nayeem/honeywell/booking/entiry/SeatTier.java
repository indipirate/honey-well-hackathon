package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class SeatTier {
    @Id
    private int id;
    private String name;
    private float price;
}
