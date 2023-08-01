import append_player_cell from "./html_cunstructor.js";

const baseUrl = "http://localhost:8080/get_players";

let players = [];

getPlayers();



async function getPlayers() {
    const response = await fetch(baseUrl);
    players = await response.json();
    console.log(players);
    for(let i=0; i< players.length;i++){
        console.log(i);
        append_player_cell(players[i]);

        $(`#${players[i].id}`).on( "click", ()=>{
            console.log(baseUrl+"/" + players[i].id)
        })
    }
  }




