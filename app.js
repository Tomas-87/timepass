const express = require('express');
const app = express();
const PORT = 3000;
const getHora = require('./middelware/horaMiddelware');
const indexRoute = require('./routes/indexRoute.js');
const endRoute = require('./routes/endRoute.js');
const validarHora = require('./middelware/validarHora.js');

app.use('/', getHora, validarHora, indexRoute);
app.use('/endRoute', getHora, validarHora, endRoute)

app.listen(PORT, () => {
    console.log(`el servidor esta en el puertos http://localhost:${PORT}`)
})