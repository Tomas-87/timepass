//pagona final
const express = require('express');
const router = express.Router();
const getHora = require('../middelware/horaMiddelware.js');

router.get('/', (req, res) => {
    res.send(`
        <h1>Ruta FInal</h1>
        <h4>Bien venido a la Ruta Final.</h4>
        <a href="/">Volver</a>
        `)
})

module.exports = router;