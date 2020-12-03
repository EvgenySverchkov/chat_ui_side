export function openSocketConnection(history) {
    let socket = new WebSocket("ws://localhost:8080/");
    socket.onopen = function () {
        console.log("Connection established");
    };
    socket.onerror = function () {
        history.push("/login");
    };
    return socket;
}
