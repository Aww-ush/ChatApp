const socket = io("ws://localhost:3000");

function sendMessage(e) {
  e.preventDefault(); // Prevent page reload on form submit

  console.log("Sending message...");

  const input = document.getElementById("input"); // Use `getElementById`

  if (input.value.trim() !== "") {
    // Check if input is not empty
    console.log("Input value:", input.value);
    socket.send(input.value); // Send message to WebSocket server
    input.value = ""; // Clear input after sending
  }

  input.focus();
}

// Listen for form submission
document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages from WebSocket server
socket.on("message", (msg) => {
    console.log("Message from server:", msg);
    const li = document.createElement("li");
    li.textContent = msg; // Use `event.data` instead of `data`
    document.querySelector("ul").appendChild(li);
});
