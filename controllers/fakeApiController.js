//controllers de la fake store api

const {
  getProductsModel,
  getProductByIdModel,
} = require('../models/fakeApiModel');

//Get all products
const getProducts = async (req, res) => {
  const products = await getProductsModel();
  res.status(200).send(products);
};

//Get product by id
const productById = async (req, res) => {
  const id = req.params.id;
  const productById = await getProductByIdModel(id);
  res.status(200).send(productById);
};

module.exports = {
  getProducts,
  productById,
};
