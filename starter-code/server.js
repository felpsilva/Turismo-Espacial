const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5050, ()=>{
    console.log('Acessar http://localhost:5050');
    console.log('Servidor execultando na porta 5050');
});