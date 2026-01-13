//primera página
const express = require('express');
const router = express.Router();
const getHora = require('../middelware/horaMiddelware.js');
const validarHora = require('../middelware/validarHora.js');

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || ''
    res.send(`
        <h1>Bienvenido</h1>
        <h4>${req.horaTotal}</h4>
        <p>${mensaje}</p>
        <a href="/endRoute"> <button>Entrar</button></a>
      `)
})

router.get('/endRoute', validarHora, (req, res) => {
    res.send(`<h1>Bienvenido a la ruta final, ya son las ${req.formarHora}</h1>
       <p> <a href="/">Home</a></p>`)
})

module.exports = router;