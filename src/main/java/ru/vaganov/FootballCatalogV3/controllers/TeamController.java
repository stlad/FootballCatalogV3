package ru.vaganov.FootballCatalogV3.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vaganov.FootballCatalogV3.models.Team;
import ru.vaganov.FootballCatalogV3.services.TeamService;

import java.awt.datatransfer.Transferable;

@RestController
@RequestMapping(value = "/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping("/{id}")
    public ResponseEntity<Team> getTeam(@PathVariable("id") Long id){
        Team team  = teamService.findById(id);
        if(team == null) return  new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(team, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Team> addTeam(@RequestBody Team team){
        team = teamService.save(team);

        return new ResponseEntity<>(team, HttpStatus.OK);
    }


}
