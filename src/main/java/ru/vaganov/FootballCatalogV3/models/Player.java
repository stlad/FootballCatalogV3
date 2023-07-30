package ru.vaganov.FootballCatalogV3.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class Player {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String lastname;

    @Enumerated(EnumType.STRING)
    private Genders gender;

    @Enumerated(EnumType.STRING)
    private Country country;

    private LocalDate birthDate;

    @ManyToOne
    @JoinColumn(name ="team_id", referencedColumnName = "id")
    private Team team;

    public Player(String name, String lastname, Genders gender){
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
    }

    public enum Genders {
        Male, Female
    }
}
