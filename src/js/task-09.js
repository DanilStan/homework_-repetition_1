const bodyRef = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const colorText = document.querySelector('.color')
// bodyRef.style.backgroundColor = "blue";

buttonChangeColor.addEventListener('click', onClickButton)

function onClickButton() {
  const colorValue = getRandomHexColor()
  bodyRef.style.backgroundColor = colorValue;
  colorText.textContent = colorValue;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

