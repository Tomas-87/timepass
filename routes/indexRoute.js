//primera página
const express = require('express');
const router = express.Router();
const getHora = require('../middelware/horaMiddelware.js');

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido</h1>
        <h4>${req.dateType}</h4>
        <a href="/endRoute">Entrar</a>
        `)
})

module.exports = router;