const baseUrl = "http://localhost:8080"

fetch(baseUrl + "/countries").then(response => response.json()).then(data => console.log(data));

function sendPlayer(){
    console.log("отправлено");
};




$(function () {
    $("#send").click(()=>sendPlayer());
});

function packPlayer(){
    let player = {
        name:$("#name"),
        lastname:$("#lastname"),

    }


}