console.log('Hello World!');
function sum() {
    const inputSum = document.getElementById('sum').value;
    // const inputValue = inputElement.value;
    console.log(inputSum)

    const inputAllSum = document.getElementById('resultSum')
    inputAllSum.innerHTML = ` 합계 : ${inputSum}`
}

function alcoholSum() {
    const inputBottle = document.getElementById('bottle').value
    const inputBottlePrice = document.getElementById('bottlePrice').value

    const inputAlcohol = inputBottle * inputBottlePrice

    console.log(inputAlcohol)
    
    const inputAlcoholSum = document.getElementById('resultAlcoholSum')
    inputAlcoholSum.innerHTML = `술값 합계 : ${inputAlcohol}`

}