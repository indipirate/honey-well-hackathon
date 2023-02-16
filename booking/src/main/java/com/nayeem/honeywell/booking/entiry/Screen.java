package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Screen {

    @Id
    private int id;
    @OneToMany
    private List<Show> show;
    @OneToMany
    private List<Seat> seats;
    @OneToOne
    private Theater theater;

}
