const inputValue = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
    textOutput.textContent = event.currentTarget.value;

    if(textOutput.textContent === '') {
        textOutput.textContent = "Anonymous"
    }
}