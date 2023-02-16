package com.nayeem.honeywell.booking.entiry;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Screen {

    @Id
    private int id;
    @ManyToMany
    @JoinTable(
            name = "screen_show",
            joinColumns = @JoinColumn(name = "screen_id"),
            inverseJoinColumns = @JoinColumn(name = "show_id")
    )
    private Set<Show> shows;
    @ManyToMany
    @JoinTable(
            name = "screen_seat",
            joinColumns = @JoinColumn(name = "screen_id"),
            inverseJoinColumns = @JoinColumn(name = "seat_id")
    )
    private Set<Seat> seats;
    @OneToOne
    private Theater theater;
    @OneToOne
    private Movie movie;

}
