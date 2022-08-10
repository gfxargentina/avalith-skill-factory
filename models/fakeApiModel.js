//modelo de la fake store api
const fetch = require('node-fetch');

const productsModel = () => {
  return fetch('https://fakestoreapi.com/products').then((res) => res.json());
};

const productByIdModel = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
};

const productsByCategoriesModel = async () => {
  const electronicsCategory = fetch(
    'https://fakestoreapi.com/products/category/electronics'
  ).then((res) => res.json());

  const jeweleryCategory = fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  ).then((res) => res.json());

  const menClothing = fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  ).then((res) => res.json());

  const womanClothing = fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  ).then((res) => res.json());

  const allCategories = await Promise.all([
    menClothing,
    womanClothing,
    electronicsCategory,
    jeweleryCategory,
  ]);

  return allCategories;
};

const firstUsersModel = () => {
  return fetch('https://fakestoreapi.com/users?limit=3').then((res) =>
    res.json()
  );
};

module.exports = {
  productsModel,
  productByIdModel,
  productsByCategoriesModel,
  firstUsersModel,
};
