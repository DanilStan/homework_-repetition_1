const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const markup = ingredients
  .map((element) => `<li class="item">${element}</li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", markup);
