var workingNumbers = document.querySelector('.working-numbers')
var result = document.querySelector('.result')
var allClear = document.querySelector('.ac')
var clear = document.querySelector('.ce')
var equals = document.querySelector('.equals')

var buttonsContainer = document.body.querySelector('.buttons');

buttonsContainer.addEventListener('click', displayBtnPress)

allClear.addEventListener('click', clearAll)
clear.addEventListener('click', deleteInput)
equals.addEventListener('click', resultEquals)
var numbersArr = []

function displayBtnPress(e) {
    if (e.target.value == undefined){
        console.log('here second');
        return
    }else if (workingNumbers.innerHTML == '0'){
        workingNumbers.innerHTML = e.target.value;
        numbersArr.push(e.target.value)
    }
    else{
        workingNumbers.innerHTML += e.target.value;
        numbersArr.push(e.target.value)
    }
}

function clearAll() {
    workingNumbers.innerHTML = '0'
    result.innerHTML = '0'
}
function deleteInput() {
    workingNumbers.innerHTML = workingNumbers.innerHTML.slice(0, -1)
}

function resultEquals(){
    console.log('here first');
    result.innerHTML = eval(workingNumbers.innerHTML);
    workingNumbers.innerHTML = '0';
}