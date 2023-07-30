const baseUrl = "http://localhost:8080/get_players";




async function getPlayers() {
    const response = await fetch(baseUrl);
    players = await response.json();
    console.log(players);
    for(i=0; i< players.length;i++){
        console.log(i);
        playerTohtml(players[i]);
    }
  }

getPlayers();


let players = [];

for(i=0; i< players.length;i++){
    console.log(i);
    playerTohtml(players[i]);
}


// fetch(baseUrl)
//     .then(response => response.json())
//     .then(data => players.append(data))
// console.log(players)





function playerTohtml(player){
    player.name;
    console.log(player);
    let line = "";
    for (const x in player) {
        if(x == "team") continue;
        line+="<td>" + ( player[x] == null ? "" : player[x]) + "</td>\n";
    }
    // player.id
    // line += addTableRow(player.id);
    // line += addTableRow(player.name);
    // line += addTableRow(player.lastname);
    // line += addTableRow(player.gender);
    // line += addTableRow(player.birthDate);
    // line += addTableRow(player.country);

    $("#main_table").append("<tr>"+ line + "</tr>");
}

function addTableRow(obj){
    return 
}

