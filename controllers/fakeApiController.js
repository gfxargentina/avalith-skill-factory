//controllers de la fake store api

const {
  getProductsModel,
  getProductByIdModel,
} = require('../models/fakeApiModel');

//Get all products
const getProducts = async (req, res) => {
  const products = await getProductsModel();
  console.log(`${req.method} ${req.url} at ${req.date}`);
  res.status(200).send(products);
};

//Get product by id
const productById = async (req, res) => {
  const id = req.params.id;

  try {
    const productById = await getProductByIdModel(id);
    console.log(`${req.method} ${req.url} product at ${req.date}`);
    res.status(200).send(productById);
  } catch (error) {
    console.log(error);
  }
};

//Get prices
const productPrices = async (req, res) => {
  //const products = await getProductsModel();
  res.status(200).send('Productos por precios');
};

module.exports = {
  getProducts,
  productById,
  productPrices,
};
