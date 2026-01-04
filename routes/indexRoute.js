//primera página
const express = require('express');
const router = express.Router();
const getHora = require('../middelware/horaMiddelware.js');

router.get('/', (req, res) => {
    res.status(req.horaValida ? 200 : 403).send(`
        <h1>Bienvenido</h1>
        <h4>${req.dateType}</h4>
        ${
            req.horaValida
            ? `
                <h4>Ya es la hora puedes Acceder:</h4>
                <a href="/endRoute">Entrar</a>`
            : `
                <p>Aún no son las 12 de la mañana, todavía no puedes entrar.</p>`
        }        
        `)
})

module.exports = router;