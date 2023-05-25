export const LIMIT = 4;

export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "pageTotalCount",
  user: "user",
  wishCart: " wishCart",
  cart: "cart",
  cartLength: "cartLength",
};

export const API = " http://localhost:8000/products";

export function totalSumFunc(products) {
  let data = products.reduce((acc, item) => acc + item.subPrice, 0);
  return data;
}

export function calcSubPrice(product) {
  return +product.count * product.price;
}
