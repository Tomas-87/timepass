//Módulo que contiene la lógica de validación de la hora

const getHora = require('./horaMiddelware');

const validarHora = (req, res, next) => {
    const hour = new Date().getHours();
        if (hour < 12) {
            return res.status(403).send(`<h5>Aún no son las 12 de la mañana.</h5>`);
        }
        
        next();
    }

    module.exports = validarHora;
