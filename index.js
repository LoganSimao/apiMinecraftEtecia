/* const express = require("express");
const app = express();

const importarBanco = require("./banco.json");
//const importarBanco = JSON.parse(words);
let port = process.env.PORT || 3000;

// pagina inicial
app.get("/", (req, res) =>{
    res.send(importarBanco);
})

app.listen(port, () => {
    console.log(`app esta escutando na porta http://localhost:${port}`);
}) */


const jsonserver = require('json-server');

const server = jsonserver.create();
const router = jsonserver.router('banco.json');

const middle = jsonserver.defaults();

const port = process.env.PORT || 3000;

server.use(middle);
server.use(router);
server.listen(port, ()=> {
    console.log(`servidor rodando na porta http://localhost:${port}`);
});
