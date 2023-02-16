package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Show {

    @Id
    private int id;

    private LocalDateTime startTime;

    @OneToOne
    private Movie movie;
}
