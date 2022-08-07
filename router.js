//router
const express = require('express');
const router = express.Router();

const errorHandler = require('./middlewares/errorHandler');
const { getProducts, productById } = require('./controllers/fakeApiController');

router.get('/', getProducts);
router.get('/:id', productById);

router.use(errorHandler.notFound);

module.exports = router;
