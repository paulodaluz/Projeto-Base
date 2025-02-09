import express from 'express';
import bodyParser from 'body-parser';

const logger = require('./services/Logger');
const utilsRoutes = require('./routes/UtilsRoutes');
const exampleRoutes = require('./routes/ExampleRoutes');

const port = process.env.NODE_PORT || '3002';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Rotas
app.use(utilsRoutes);
app.use(exampleRoutes);

app.listen(port, () => {
  logger.info(`A aplicação está rodando na porta ${port}`);
});

module.exports = app;
