package ru.vaganov.FootballCatalogV3.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import ru.vaganov.FootballCatalogV3.models.Country;
import ru.vaganov.FootballCatalogV3.models.Player;
import ru.vaganov.FootballCatalogV3.services.PlayerService;
import ru.vaganov.FootballCatalogV3.services.TeamService;

import java.util.List;

@RestController
@RequestMapping(value = "/players")
public class PlayerController {


    @Autowired
    private PlayerService playerService;

    @Autowired
    private TeamService teamService;
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayer(@PathVariable("id") Long id){
        Player player = playerService.findById(id);
        if(player == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(player, HttpStatus.OK);
    }


    @PostMapping("/")
    public ResponseEntity<Player> addPLayer(@RequestBody Player player){
        playerService.save(player);

        messagingTemplate.convertAndSend("/topic", player);
        return new ResponseEntity<>(player, HttpStatus.OK);

    }

    @PutMapping("/")
    public ResponseEntity<Player> editPLayer(@RequestBody Player player){
        if(!playerService.existsById(player.getId()))
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        if(player.getTeam() != null && !teamService.existById(player.getTeam().getId()))
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        player = playerService.save(player);

        return new ResponseEntity<>(player, HttpStatus.OK);
    }



}
