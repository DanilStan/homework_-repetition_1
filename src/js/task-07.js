const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(inputRef)

textRef.style.fontSize = "40px"

inputRef.addEventListener('input', onChangeRangeValue)

function onChangeRangeValue(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
    console.log(event.currentTarget.value);
}
