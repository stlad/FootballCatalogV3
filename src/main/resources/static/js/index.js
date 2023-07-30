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
    let line = "<td>" + player.id + " </td>\n";
    line += "<td>" + player.name + " </td>\n";
    line += "<td>" + player.lastname + " </td>\n";
    line += "<td>" + player.gender + " </td>\n";
    line += "<td>" + player.birthDate + " </td>\n";
    line += "<td>" + player.country + " </td>\n";

    $("#main_table").append("<tr>"+ line + "</tr>");
}