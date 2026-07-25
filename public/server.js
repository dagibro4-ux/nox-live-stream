
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kick_clone"
});

db.connect((err) => {
    if (err) {
        console.log("Database Error:", err);
        return;
    }

    console.log("MySQL Connected");
});

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API
app.get("/api/status", (req, res) => {
    res.json({
        status: "online",
        message: "Kick Clone API Running"
    });
});

// Socket.IO
io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.on("join-stream", (room) => {
        socket.join(room);
    });

    socket.on("chat-message", (data) => {

        io.to(data.room).emit("chat-message", {
            username: data.username,
            message: data.message,
            time: new Date()
        });

    });

    socket.on("disconnect", () => {
        console.log("Disconnected:", socket.id);
    });

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

    console.log(`Server Running http://localhost:${PORT}`);

});
