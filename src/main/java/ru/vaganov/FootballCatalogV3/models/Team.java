package ru.vaganov.FootballCatalogV3.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;


@Entity
@Data
public class Team {

    @Id
    @GeneratedValue
    private Long id;

//    @OneToMany
//    @JoinColumn(name = "player_id",referencedColumnName = "id")
//    private Set<Player> players;


    private String name;
}
