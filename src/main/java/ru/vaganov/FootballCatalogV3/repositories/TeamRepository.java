package ru.vaganov.FootballCatalogV3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vaganov.FootballCatalogV3.models.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
