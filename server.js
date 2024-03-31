const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');

const app = express();
const connectDatabase = require('./src/database/db.js');
const port = process.env.PORT || 5000;

connectDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log('Servidor rodando na porta 5000 e banco de dados conectado')
    );
  })
  .catch((error) => console.log(error));

app.use(cors());

app.use(express.json());

app.use(routes);
