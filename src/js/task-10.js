const inputValue = document.querySelector('input');
const buttorCreate = document.querySelector('button[data-create]');
const buttorDestroy = document.querySelector('button[data-destroy]');
const insertElement = document.querySelector('#boxes');
let inputNumber = 0;
let emptyArray = []

inputValue.addEventListener('input', onInputChange);
buttorCreate.addEventListener('click',onCreateClick);
buttorDestroy.addEventListener('click', onDestroyClick)

function onCreateClick() {
  createBoxes(inputNumber)
}

function onDestroyClick() {
  insertElement.innerHTML = '';
  inputValue.valueAsNumber = '';
}

function onInputChange(event) {
  inputNumber = event.currentTarget.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let widthAndHeightValue = 30
  for (let index = 1; index <= amount; index++) {
    const newElement = document.createElement('div');
    newElement.style.width = `${widthAndHeightValue}px`;
    newElement.style.height = `${widthAndHeightValue}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    insertElement.appendChild(newElement);
    widthAndHeightValue += 10;
  }

  const markup = emptyArray.join("")
  insertElement.insertAdjacentHTML('beforeend', markup)
}

