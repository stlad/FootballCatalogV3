import {load_player_to_edit_form, add_player_form} from "./html_cunstructor.js";

const baseUrl = "http://localhost:8080";

let id = 402;

$(document).ready( () => {
    add_player_form();
    if(id == null || id <=0 ){

    }
    else{
        get_player_by_id_and_load(id);
    }
    
});


async function get_player_by_id_and_load(id){
    const response =  await fetch(baseUrl+"/players/"+id);
    let player = await response.json();
    load_player_to_edit_form(player);
}


