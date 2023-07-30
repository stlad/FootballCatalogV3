package ru.vaganov.FootballCatalogV3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vaganov.FootballCatalogV3.models.Player;
import ru.vaganov.FootballCatalogV3.models.Team;

import java.util.Set;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    public Set<Player> findByTeam(Team team);
}
