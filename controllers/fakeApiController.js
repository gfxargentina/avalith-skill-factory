//controllers de la fake store api

const {
  productsModel,
  productByIdModel,
  productsByCategoriesModel,
  firstUsersModel,
  cartsModel,
  usersModel,
  categoriesModel,
} = require('../models/fakeApiModel');

//Get all products
const getProducts = async (req, res) => {
  const { method, url, date } = req;

  try {
    const products = await productsModel();
    console.log(`${method} ${url} at ${date}`);
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

//Get product by id
const getProductById = async (req, res) => {
  const { method, url, date } = req;

  const id = req.params.id;

  try {
    const productById = await productByIdModel(id);
    console.log(`${method} ${url} product at ${date}`);
    res.status(200).send(productById);
  } catch (error) {
    console.log(error);
  }
};

//Get prices
const getProductPrices = async (req, res) => {
  const { method, url, date } = req;

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
      console.log(`${method} ${url} product at ${date}`);
      res.status(200).send(descPrices);
    }
  } catch (error) {
    console.log(error);
  }
};

//Get All Products by category
const getProductsByCategories = async (req, res) => {
  const { method, url, date } = req;

  try {
    const products = await productsByCategoriesModel();

    const flatProducts = products.flat();

    const productCategories = flatProducts.map((product) => ({
      category: product.category,
      product: product.title,
    }));

    console.log(`${method} ${url} product at ${date}`);

    res.status(200).send(productCategories);
  } catch (error) {
    console.log(error);
  }
};

//get first 3 users
const getFirstUsers = async (req, res) => {
  const { method, url, date } = req;

  try {
    const users = await firstUsersModel();

    const first3Users = users.map((user) => ({
      userId: user.id,
      user: user.username,
    }));

    console.log(`${method} ${url} product at ${date}`);

    res.status(200).send(first3Users);
  } catch (error) {
    console.log(error);
  }
};

const getMostExpensiveProducts = async (req, res) => {
  const { method, url, date } = req;

  const products = await productsByCategoriesModel();
  const price = 100;

  try {
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

    console.log(`${method} ${url} most expensive products at ${date}`);

    res.status(200).send(descPrices);
  } catch (error) {
    console.log(error);
  }
};

//get all carts
const getAllBigCarts = async (req, res) => {
  const { method, url, date } = req;

  try {
    const users = await usersModel();
    const carts = await cartsModel();

    const userCarts = carts.filter((cart) => {
      if (cart.products.length > 2) {
        const user = users.find((user) => user.id === cart.userId);

        cart.user = user.name;

        return cart;
      }
    });

    console.log(`${method} ${url} carts at ${date}`);
    res.status(200).send(userCarts);
  } catch (error) {
    console.log(error);
  }
};

//get all categories
const getAllCategories = async (req, res) => {
  const { method, url, date } = req;

  try {
    const categories = await categoriesModel();
    console.log(`${method} ${url} carts at ${date}`);

    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
  }
};

//get all categories
const getAllUsers = async (req, res) => {
  const { method, url, date } = req;

  try {
    const users = await usersModel();
    console.log(`${method} ${url} carts at ${date}`);

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

//get all categories
const getAllCarts = async (req, res) => {
  const { method, url, date } = req;

  try {
    const carts = await cartsModel();
    console.log(`${method} ${url} carts at ${date}`);

    res.status(200).send(carts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductPrices,
  getProductsByCategories,
  getFirstUsers,
  getMostExpensiveProducts,
  getAllCarts,
  getAllBigCarts,
  getAllCategories,
  getAllUsers,
};
