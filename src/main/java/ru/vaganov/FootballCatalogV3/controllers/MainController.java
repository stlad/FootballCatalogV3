package ru.vaganov.FootballCatalogV3.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.vaganov.FootballCatalogV3.models.Country;
import ru.vaganov.FootballCatalogV3.models.Player;
import ru.vaganov.FootballCatalogV3.services.PlayerService;

import java.util.List;

@Controller()
public class MainController {
    @Autowired
    private PlayerService playerService;

    @GetMapping("/countries")
    public ResponseEntity<Country[]> getCountries(){
        return new ResponseEntity<>(Country.values(), HttpStatus.OK);
    }

    @GetMapping("/get_players")
    public ResponseEntity<List<Player>> getAllPLayers(){
        List<Player> players = playerService.findAll();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

}
