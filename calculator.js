console.log('Hello World!');

function sum() {
    const inputSum = document.getElementById('sum').value;
    // const inputValue = inputElement.value;
    console.log(inputSum)

    const inputAllSum = document.getElementById('resultSum')
    inputAllSum.innerHTML = ` 합계 : ${inputSum}`
}

function alcoholSum() {
    // 술 개수랑 가격 곱하기
    const inputBottle = document.getElementById('bottle').value
    const inputBottlePrice = document.getElementById('bottlePrice').value

    const inputAlcohol = inputBottle * inputBottlePrice

    console.log(inputAlcohol)

    // 술값 합계 나타내기
    const inputAlcoholSum = document.getElementById('resultAlcoholSum')
    inputAlcoholSum.innerHTML = `술값 합계 : ${inputAlcohol}`

    // 안주 합계 나타내기
    const inputSum = document.getElementById('sum').value

    const inputSnack =  inputSum - inputAlcohol
    console.log(inputSnack)

    const inputSnackSum = document.getElementById('snackSum')
    inputSnackSum.innerHTML = `안주 합계 : ${inputSnack}`

}



function nonPeople() {
    const inputNon = document.getElementById('nonAlcoholPeople').value
    const inputSnack = document.getElementById('snackSum').value

    const inputNonPeople = inputNon/inputSnack

    console.log(inputNonPeople)

    // const inputNonResult = document.getElementById('resultNon')
    // inputNonResult.innerHTML = `술 안먹 : ${inputNonPeople}`
    
}

// function alcoholPeople() {
//     const snackPrice = document.getElementById('snackSum').value
//     const alcoholPrice = document.getElementById('resultAlcoholSum').value
//     const PeopleOk = document.getElementById('okPeople').value
//     const PeopleNo = document.getElementById('nonPeopel').value
    


//     const inputAlcoholPeople = (snackPrice+alcoholPrice)/PeopleOk
//     const inputNonAlcoholPeople = snackPrice/PeopleNo

//     console.log(inputAlcoholPeople)

//     const test = document.getElementById('okPeople')
//     test.innerHTML=`dks:${inputAlcoholPeople}`

// }
