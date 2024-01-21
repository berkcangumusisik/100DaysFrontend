// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("Ekmek", 5);
// console.log(price, tq);

console.log("Modül import edildi");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("Ekmek", 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add("pizza", 3);
add("Elma", 4);
console.log(cart);

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
lastPost.then((last) => console.log(last));

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} adet ${product} sepete eklendi.`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} adet ${product} sipariş edildiç`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("Elma", 12);
ShoppingCart2.addToCart("Pizza", 2);
console.log(ShoppingCart2);

//Common JS

// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} adet ${product} sepete eklendi.`);
// };

// const {addToCart} = require("./shoppingCart.js")

import cloneDeep from "./node_modules/lodash/cloneDeep.js";

const state = {
  cart: [
    { product: "Ekmek", quantity: 5 },
    { product: "Pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = "Merhaba";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const berkcan = new Person("Berkcan");

console.log("Berkcan" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

