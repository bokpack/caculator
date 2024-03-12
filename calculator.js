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
    console.log("어ㅏㅜㄴ아ㅓ로",inputSnack)

    const inputSnackSum = document.getElementById('snackSum') 
    
    inputSnackSum.innerText = `안주 합계 : ${inputSnack}`

    // 술 안먹 구하기



    

}

// 지피티
// function nonPeople() {
//     const inputNon = parseInt(document.getElementById('nonAlcoholPeople').value);
//     const inputSnackSum = parseInt(document.getElementById('snackSum').textContent); // 변경된 부분

//     console.log("inputNon", inputNon);
//     console.log("inputSnackSum", inputSnackSum);

//     if (!isNaN(inputNon) && !isNaN(inputSnackSum)) { // 추가된 부분
//         const inputNonPeople = (inputSnackSum / inputNon);
//         console.log(typeof(inputNonPeople));
//     } else {
//         console.log("숫자로 변환할 수 없는 값이 있습니다.");
//     }
// }




//내가 짠 코드
function nonPeople() {
    const inputNon = parseInt(document.getElementById('nonAlcoholPeople').value);
    const inputSnackSum = parseInt(document.getElementById('snackSum').innerHTML)


    //const inputSnackSum = parseInt(document.getElementById('snackSum').value); nan
    //const inputSnackSum = parseInt(document.getElementById('snackSum')); nan
    //const inputSnackSum = document.getElementById('snackSum'); 내가 적어둔 p태그 그대로 뜸 
    //const inputSnackSum = document.getElementById('snackSum').value; undefined

    //const inputSnackSum = parseInt(document.getElementById('snackSum').value)
    //console.log(document.getElementById('snackSum').innerHTML)
    //console.log(document.getElementById('snackSum').textContent) 
    
    console.log(inputNon)
    console.log(inputSnackSum)



   // const inputNonPeople = (inputSnackSum/inputNon)ㄴ

  //  console.log("inputNonPeople",inputNonPeople)
    



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
