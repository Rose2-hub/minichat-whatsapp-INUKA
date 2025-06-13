// Connexion
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@inuka.com" && password === "1234") {
        localStorage.setItem("user", email);
        window.location.href = "chat.html";
    } else {
        alert("Email ou mot de passe incorrect !");
    }
}

// WebSocket pour le chat
const socket = new WebSocket("ws://localhost:8080/ws");

socket.onmessage = function(event) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.textContent = event.data;
    messages.appendChild(message);
};

function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value;

    if (message) {
        socket.send(message);
        input.value = "";
    }
}
