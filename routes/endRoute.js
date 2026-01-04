//pagona final
const express = require('express');
const router = express.Router();
const getHora = require('../middelware/horaMiddelware.js');

router.get('/', (req, res) => {
    if (!req.horaValida) {
        return res.status(403).send(`
              <h3>Acceso denegado</h3>
              <h4>${req.dateType}</h4>
            <p>Aún no son las 12 de la mañana.</p>
            <a href="/">Volver</a>
            `);
    };

    res.send(`
        <h1>Ruta FInal</h1>
        <h4>Bien venido a la Ruta Final.</h4>
        <a href="/">Volver</a>
        `);
});

module.exports = router;