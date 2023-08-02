
let country_dct = {
    "RUSSIA":["Россия", "img/rus.png"],
    "USA":["США", "img/usa.png"],
    "ITALY":["Италия", "img/italy.png"]
}
let genders_dct ={"Male":"М.", "Female":"Ж."} 



let id = 52;

console.log("asd");
$(document).ready( () => {
    add_player_form();
    if(id == null || id <=0 ){

    }
    else{
        let player = get_player_by_id(id);
        load_player(player);
    }
    
});


function get_player_by_id(id){
    // TODO запрос к серверу за игроком
    return player = {id:52, name:"Влад", lastname:"Ваганов", birthDate: "27-11-2001", country:"ITALY", team:"ЛОХИ", gender:"Male"}
}



function load_player(player){
    console.log("jel");
    $("#id-field").val(player.id);
    $("#name-field").val(player.name);
    $("#lastname-field").val(player.lastname);
    $("#birth-field").val(Date.parse(player.birthDate)); // не пишет
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
    
    </form>
    `

    $("#form-container").append(form);
}