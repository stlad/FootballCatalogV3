import { append_player_cell, add_player_form,load_player_to_edit_form } from "./html_cunstructor.js";
const baseUrl = "http://localhost:8080";



let players = [];

getPlayers();

$(function () {
    add_player_form();
    $( "#add-player" ).click(() => {
        //console.log(baseUrl + "/player_edit");
        //selected_player_id = -1;
        window.localStorage.setItem("selected_player_id",-1);
        window.location.href = baseUrl+"/player_edit";
    });
});










async function getPlayers() {
    const response = await fetch(baseUrl+"/get_players");
    players = await response.json();
    //console.log(players);
    for(let i=0; i< players.length;i++){
        //console.log(i);
        append_player_cell(players[i]);
        $(`#${players[i].id}`).on( "click", ()=>{
            console.log("current id is: "+ players[i].id);
            load_player_to_edit_form(players[i]);
        })
    }
  }




