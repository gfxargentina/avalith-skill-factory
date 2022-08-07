//modelo de la fake store api
const fetch = require('node-fetch');

const getProductsModel = () => {
  return fetch('https://fakestoreapi.com/products').then((res) => res.json());
};

const getProductByIdModel = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
};

module.exports = {
  getProductsModel,
  getProductByIdModel,
};
