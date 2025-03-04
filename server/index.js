import { serve } from "bun";
import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log("a user has connected");

    socket.on("message", (msg) => {
        console.log("Recieved message: ", msg);
        socket.emit("From server: " + msg);
    })
    socket.on("disconnect", () => {
        console.log("user disconnected");
    })
})
httpServer.listen(3000, () => {
  console.log("Socket.IO server running on http://localhost:3000");
});
