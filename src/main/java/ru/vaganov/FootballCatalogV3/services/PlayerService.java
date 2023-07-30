package ru.vaganov.FootballCatalogV3.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.vaganov.FootballCatalogV3.models.Player;
import ru.vaganov.FootballCatalogV3.models.Team;
import ru.vaganov.FootballCatalogV3.repositories.PlayerRepository;

import java.util.List;
import java.util.Set;

@Service
public class PlayerService {

    private PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }


    public Player findById(Long id){
        return playerRepository.findById(id).orElse(null);
    }

    public Player save(Player player){
        return playerRepository.save(player);
    }

    public boolean existsById(Long id){
        return  playerRepository.existsById(id);
    }

    public Set<Player> findByTeam(Team team){
        return playerRepository.findByTeam(team);
    }

    public List<Player> findAll(){
        return playerRepository.findAll();
    }
}
