//servidor
const express = require('express');
const router = require('./router');

const app = express();

const port = 3005;

app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor corriendo el puerto ${port}`);
});
