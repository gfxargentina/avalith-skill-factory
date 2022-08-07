//router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('1era ruta del servidor');
});

module.exports = router;
