

const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/ws'
});

connect();

function connect() {
    console.log("connecting to: " + "ws://localhost:8080/ws");
    stompClient.activate();
}
stompClient.onConnect = (frame) => {
    console.log("subscribing to:" +" /topic");
    stompClient.subscribe("/topic", (player) => {
        console.log(player);
        playerTohtml(JSON.parse(player.body));
    });

};


stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};