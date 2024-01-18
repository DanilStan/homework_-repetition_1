const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const actualValue = document.querySelector("#value");
let count = 0


function updateCount() {
  actualValue.textContent = count;
}
buttonIncrement.addEventListener('click', onButtonIncrement);
buttonDecrement.addEventListener('click', onButtonDecrement);

function onButtonDecrement() {
    count -= 1;
    updateCount();
}

function onButtonIncrement() {
  count += 1;
  updateCount();
}