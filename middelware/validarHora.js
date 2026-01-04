//Módulo que contiene la lógica de validación de la hora

const getHora = require('./horaMiddelware');

const validarHora = (req, res, next) => {
    const horaValida = new Date().getHours() >= 12;

        next();
    }

    module.exports = validarHora;
