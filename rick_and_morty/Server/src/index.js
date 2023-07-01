const express = require('express');
const router = require('./routes/index')

const PORT = 3001;
const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use('/rickandmorty', router);
 
server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

































/***************************  Codigos con promesas *********************************/


// const http = require("http");
// const getCharById = require("./controllers/getCharById")


// http.createServer((req, res) => {
//     const {url} = req;
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(url.includes("/rickandmorty/character")){
//         const id = url.split("/").pop();
//         getCharById(res, id);
//     }
    
// }).listen(3001, "localhost");





// if (url.includes("/rickandmorty/character/")){
//     let id = Number(url.split("/").pop());
//     let charId = characters.find((char) => {
//         return char.id === id;
//     })
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.end(JSON.stringify(charId));
// }