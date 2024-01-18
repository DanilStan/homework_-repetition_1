const inputRef = document.querySelector('#validation-input')
let countValue = '';

inputRef.addEventListener('blur', onBlueChange)
inputRef.addEventListener('input', onChangeInput)

function onBlueChange() {
    if(Number(inputRef.dataset.length) === countValue.length) {
        inputRef.classList.add("valid")
    } else {
        inputRef.classList.add("invalid")
    }
}

function onChangeInput(event) {
    countValue = event.currentTarget.value
}


