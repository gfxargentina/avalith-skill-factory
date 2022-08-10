//controllers de la fake store api

const {
  productsModel,
  productByIdModel,
  productsByCategoriesModel,
  firstUsersModel,
} = require('../models/fakeApiModel');

//Get all products
const getProducts = async (req, res) => {
  const products = await productsModel();
  console.log(`${req.method} ${req.url} at ${req.date}`);
  res.status(200).send(products);
};

//Get product by id
const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const productById = await productByIdModel(id);
    console.log(`${req.method} ${req.url} product at ${req.date}`);
    res.status(200).send(productById);
  } catch (error) {
    console.log(error);
  }
};

//Get prices
const getProductPrices = async (req, res) => {
  try {
    const products = await productsModel();
    const productPrices = products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
    }));

    if (req.query.order === 'asc') {
      productPrices.sort((a, b) => a.price - b.price);
      console.log(`${req.method} ${req.url} product at ${req.date}`);
      res.status(200).send(productPrices);
    }

    if (req.query.order === 'desc') {
      const descPrices = productPrices.sort((a, b) => b.price - a.price);
      console.log(`${req.method} ${req.url} product at ${req.date}`);
      res.status(200).send(descPrices);
    }
  } catch (error) {
    console.log(error);
  }
};

//Get All Products by category
const getProductsByCategories = async (req, res) => {
  try {
    const products = await productsByCategoriesModel();

    const flatProducts = products.flat();

    const productCategories = flatProducts.map((product) => ({
      category: product.category,
      product: product.title,
    }));

    console.log(`${req.method} ${req.url} product at ${req.date}`);

    res.status(200).send(productCategories);
  } catch (error) {
    console.log(error);
  }
};

//get first 3 users
const getFirstUsers = async (req, res) => {
  try {
    const users = await firstUsersModel();

    const first3Users = users.map((user) => ({
      userId: user.id,
      user: user.username,
    }));

    console.log(`${req.method} ${req.url} product at ${req.date}`);
    res.status(200).send(first3Users);
  } catch (error) {
    console.log(error);
  }
};

const getMostExpensiveProducts = async (req, res) => {
  const products = await productsByCategoriesModel();
  const price = 100;

  //aplana los arrays anidados
  const flatProducts = products.flat();

  const productPrices = flatProducts
    .filter((product) => {
      if (product.price > price) return product;
    })
    .map((product) => ({
      title: product.title,
      price: product.price,
      category: product.category,
    }));

  const descPrices = productPrices.sort((a, b) => b.price - a.price);

  console.log(`${req.method} ${req.url} product at ${req.date}`);

  res.status(200).send(descPrices);
};

module.exports = {
  getProducts,
  getProductById,
  getProductPrices,
  getProductsByCategories,
  getFirstUsers,
  getMostExpensiveProducts,
};
