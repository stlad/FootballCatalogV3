package ru.vaganov.FootballCatalogV3.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.vaganov.FootballCatalogV3.models.Team;
import ru.vaganov.FootballCatalogV3.repositories.TeamRepository;

import java.util.List;

@Service
public class TeamService {

    private TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Team findById(Long id){
        return teamRepository.findById(id).orElse(null);
    }

    public Team save(Team team){
        return teamRepository.save(team);
    }

    public boolean existById(Long id){
        return teamRepository.existsById(id);
    }

    public List<Team> findAll(){
        return teamRepository.findAll();
    }
}
