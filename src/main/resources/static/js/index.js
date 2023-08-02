import append_player_cell from "./html_cunstructor.js";
const baseUrl = "http://localhost:8080";



let players = [];

getPlayers();

$(function () {
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
            //elected_player_id = players[i].id;
            console.log(players[i].id);
            window.localStorage.setItem("selected_player_id", players[i].id);
            window.location.href = baseUrl+"/player_edit";

        })
    }
  }




