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
    console.log("안주 합계",inputSnack)

    const inputSnackSum = document.getElementById('snackSum')
    
    // NaN
    //const inputSnackSum = parseInt(document.getElementById('snackSum').innerHTML);
    
    inputSnackSum.innerText = `${inputSnack}`
    console.log("얘 뭐지",inputSnackSum)

    // 술 안먹 구하기


    

}




function nonPeople() {
    const inputNon = parseInt(document.getElementById('nonAlcoholPeople').value);
    const inputSnackSum = parseInt(document.getElementById('snackSum').innerHTML);

    console.log(inputNon)
    console.log("얘뭐지2",inputSnackSum)

    const nonPeopleMoney = inputSnackSum/inputNon
    console.log("술안먹돈",nonPeopleMoney)


    const inputNonPeople = document.getElementById('resultNon')
    inputNonPeople.innerHTML = ` 합계 : ${nonPeopleMoney}`


    //const inputSnackSum = parseInt(document.getElementById('snackSum').value); nan
    //const inputSnackSum = parseInt(document.getElementById('snackSum')); nan
    //const inputSnackSum = document.getElementById('snackSum'); 내가 적어둔 p태그 그대로 뜸 
    //const inputSnackSum = document.getElementById('snackSum').value; undefined

    //const inputSnackSum = parseInt(document.getElementById('snackSum').value)
    //console.log(document.getElementById('snackSum').innerHTML)
    //console.log(document.getElementById('snackSum').textContent) 
    




   // const inputNonPeople = (inputSnackSum/inputNon)ㄴ

  //  console.log("inputNonPeople",inputNonPeople)
    



    // const inputNonResult = document.getElementById('resultNon')
    // inputNonResult.innerHTML = `술 안먹 : ${inputNonPeople}`
    
}



