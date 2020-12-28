import product from "./product.js";

export const showInConsole = (item) => {
  console.log(item);
};

export const showInDOM = (item, tag = product.HTMLElement) => {
  const element = document.createElement(tag);
  element.textContent = item;
  document.body.appendChild(element);
};
