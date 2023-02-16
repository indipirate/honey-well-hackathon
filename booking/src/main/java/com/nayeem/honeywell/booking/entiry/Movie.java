package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Movie {

    @Id
    private int id;

    private String name;

    private LocalDate releaseDate;

    private int length;

}
