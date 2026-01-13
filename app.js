const express = require('express');
const app = express();
const horaMiddelware = require('./middelware/horaMiddelware');
const routes = require('./routes/indexRoute.js');
const PORT = 3000;

app.use(horaMiddelware);

app.use('/', routes);

app.use((req, res) => {
    res.status(404).send(`<h1>Error 404</h1><p>Página no encontrada</p>`)
})

app.listen(PORT, () => {
    console.log(`el servidor esta en el puertos http://localhost:${PORT}`)
})
