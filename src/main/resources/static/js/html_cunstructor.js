export const country_dct = {
    "RUSSIA":["Россия", "img/rus.png"],
    "USA":["США", "img/usa.png"],
    "ITALY":["Италия", "img/italy.png"],
    null: ['Страна неизвестна',"img/X.png" ]
}
export const genders_dct ={
    "Male":"М.", 
    "Female":"Ж.", 
    "":"?", 
    null:"?"
} 

export default function append_player_cell(player){
    console.log(player);
    /*for(const item in player){
        if(player[item]==null || player[item]==undefined)
            player[item] = "";
    }*/


    let cell = `<div class="player-cell">` + "\n";
    cell += `<p>${player.id}</p>`  + "\n";
    cell += `<p>${player.name} ${player.lastname} (${genders_dct[player.gender]})</p>` + "\n";
    cell += `<p>${player.birthDate}</p>` + "\n";
    cell += `<img src="${country_dct[player.country][1]}"width="24px" />   ${country_dct[player.country][0]}` + "\n";
    cell += `<p>${player.team===null ? "не в команде" : player.team.name}</p>` + "\n";
    cell += `<input id="${player.id}" type="button" value="+" />` + "\n";
    cell += `</div>` + "\n";


    console.log(cell);
    $("#player-area").append(cell);
}