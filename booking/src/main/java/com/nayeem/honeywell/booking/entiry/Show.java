package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Data
public class Show {

    @Id
    private int id;

    private String startTime;

    @ManyToMany(mappedBy = "shows")
    Set<Screen> screens;
}
