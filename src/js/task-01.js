const categories = document.querySelector("#categories");
const numberCategoies = categories.querySelectorAll(".item");

console.log("Number of categories:", numberCategoies.length);

numberCategoies.forEach((elem) => {
  const title = elem.querySelector("h2").textContent;
  const counterElements = elem.querySelectorAll("li");
  console.log("Category:", title);
  console.log("Elements:", counterElements.length);
});
