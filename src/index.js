const express = require('express');
var bodyParser = require('body-parser');

const utilsRoutes = require('./routes/UtilsRoutes');
const exampleRoutes = require('./routes/ExampleRoutes');

const port = process.env.NODE_PORT || '3002';

const app = express();

app.use(utilsRoutes);
app.use(exampleRoutes);
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`A aplicação está rodando na porta ${port}`)
})

module.exports = app;