//router
const express = require('express');
const router = express.Router();

const errorHandler = require('./middlewares/errorHandler');
const {
  getProducts,
  productById,
  productPrices,
} = require('./controllers/fakeApiController');
const date = require('./middlewares/datesMiddleware');

router.get('/products', date, getProducts);
router.get('/products/:id', date, productById);
router.get('/prices', date, productPrices);

router.use(errorHandler.notFound);

module.exports = router;
