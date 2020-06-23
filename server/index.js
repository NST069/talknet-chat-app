const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = 5000 || process.env.PORT;

const {addUser, getUser, getUsersInRoom, removeUser} = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket)=>{
    socket.on("join", ({name, room}, callback)=>{
        const {error, user} = addUser({id:socket.id, name, room});
        if(error) return callback(error);

        socket.emit("message", {user:"admin", text:`${user.name} joined ${user.room}`});
        socket.broadcast.to(user.room).emit("message", {user:"admin", message:`${user.name} has joined`});

        socket.join(user.room);

        callback();
    });

    socket.on("sendMessage", (message, callback)=>{
        const user = getUser(socket.id);

        io.to(user.room).emit("message", {user:user.name, text:message});

        callback();
    });

    socket.on("disconnect", ()=>{
        console.log("User left");
    });
});

app.use(router);

server.listen(PORT, ()=>{

    console.log(`Server running on port ${PORT}`);
});