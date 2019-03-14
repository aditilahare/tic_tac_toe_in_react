const http = require('http');
const express = require('express');
const app = express();
const PORT = 5000;

const server = http.createServer(app);

app.use(express.static('dist'));

server.on('listening',()=>{
    console.log(`Server started at ${PORT}`);
});

server.listen(PORT);