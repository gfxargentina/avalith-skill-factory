//router
const express = require('express');
const router = express.Router();

const errorHandler = require('./middlewares/errorHandler');
const {
  getProducts,
  getProductById,
  getProductPrices,
  getProductsByCategories,
  getFirstUsers,
  getMostExpensiveProducts,
  getAllBigCarts,
  getAllCarts,
  getAllCategories,
  getAllUsers,
} = require('./controllers/fakeApiController');
const date = require('./middlewares/datesMiddleware');

router.use(date);

router.get('/products', getProducts);
router.get('/products/categories', getProductsByCategories);
router.get('/users/firsts', getFirstUsers);
router.get('/prices', getProductPrices);
router.get('/expensive', getMostExpensiveProducts);
router.get('/bigcarts', getAllBigCarts);
router.get('/carts', getAllCarts);
router.get('/categories', getAllCategories);
router.get('/users', getAllUsers);
router.get('/products/:id', getProductById);

router.use(errorHandler.notFound);

module.exports = router;
