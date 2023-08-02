export const country_dct = {
    "RUSSIA":["Россия", "img/rus.png"],
    "USA":["США", "img/usa.png"],
    "ITALY":["Италия", "img/italy.png"],
    null: ['Страна неизвестна',"img/X.png" ]
}
export const genders_dct ={
    "Male":"м.", 
    "Female":"ж.", 
    "":"?", 
    null:"?"
} 

function append_player_cell(player){
    console.log(player);
    /*for(const item in player){
        if(player[item]==null || player[item]==undefined)
            player[item] = "";
    }*/
    let cell = `
    <div class="player-cell">
        <p>${player.id}</p>
        <p>${player.name} ${player.lastname} (${genders_dct[player.gender]})</p>
        <p>${player.birthDate}</p>
        <img src="${country_dct[player.country][1]}"width="24px" />   ${country_dct[player.country][0]}
        <p>${player.team===null ? "не в команде" : player.team.name}</p>
        <input id="${player.id}" type="button" value="+" />
    </div> `
    console.log(cell);
    $("#player-area").append(cell);
}


function load_player_to_edit_form(player){
    console.log("jel");
    $("#id-field").val(player.id);
    $("#name-field").val(player.name);
    $("#lastname-field").val(player.lastname);
    $("#birth-field").val(player.birthDate); 
    
}


function add_player_form(){
    let form = `
    <form class="player_edit_form">
        <p id="id-field" class="field"></p>
        <input type="text" id="name-field" class="form-control  field" placeholder="Имя футболиста..."><br>
        <input type="text" id="lastname-field" class="form-control  field" placeholder="Фамилия футболиста..."><br>
        <input type="date" id="birth-field" valuename="date" class="form-control field"/>
        
    
        <select  id="gender-field" class=" form-control  field gender-field">
            <option>м.</option>
            <option>ж.</option>
        </select>
        <select id="country-field" class="form-control  field country-field">
        </select>
    
        <select id="team-field" class="form-control  field">
        </select>
    
    </form>`

    $("#form-container").append(form);
}


export {add_player_form, append_player_cell, load_player_to_edit_form}