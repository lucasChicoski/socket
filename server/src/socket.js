const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

io.on('connect', (socket) => {
    console.log('a user connected');

    socket.on('test', (data) => {
        console.log('test')
        console.log(data)
    })

    socket.on('disconnect', (socket) => {
        console.log('a user disconected')
    })
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});