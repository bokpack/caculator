console.log('Hello World!');
function sum() {
    const inputElement = document.getElementById('sumInput');
    const inputValue = inputElement.value;
    console.log(inputValue)

    const resultElement = document.getElementById('resultSum')
    resultElement.innerHTML = ` ${inputValue}`
}