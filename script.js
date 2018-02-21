var workingNumbers = document.querySelector('.working-numbers')
var result = document.querySelector('.result')
var allClear = document.querySelector('.ac')
var clear = document.querySelector('.ce')
var one = document.querySelector('.one')
var two = document.querySelector('.two')
var three = document.querySelector('.three')
var four = document.querySelector('.four')
var five = document.querySelector('.five')
var six = document.querySelector('.six')
var seven = document.querySelector('.seven')
var eight = document.querySelector('.eight')
var nine = document.querySelector('.nine')
var zero = document.querySelector('.zero')
var plus = document.querySelector('.plus')
var minus = document.querySelector('.minus')
var divide = document.querySelector('.divide')
var multiply = document.querySelector('.multiply')
var equals = document.querySelector('.equals')

one.addEventListener('click', displayBtnPress)
two.addEventListener('click', displayBtnPress)
three.addEventListener('click', displayBtnPress)
four.addEventListener('click', displayBtnPress)
five.addEventListener('click', displayBtnPress)
six.addEventListener('click', displayBtnPress)
seven.addEventListener('click', displayBtnPress)
eight.addEventListener('click', displayBtnPress)
nine.addEventListener('click', displayBtnPress)
zero.addEventListener('click', displayBtnPress)
plus.addEventListener('click', displayBtnPress)
minus.addEventListener('click', displayBtnPress)
multiply.addEventListener('click', displayBtnPress)
divide.addEventListener('click', displayBtnPress)

allClear.addEventListener('click', clearAll)
clear.addEventListener('click', deleteInput)

function displayBtnPress() {
    if (workingNumbers.innerHTML == '0')
        workingNumbers.innerHTML = this.value;
    else
        workingNumbers.innerHTML += this.value; 
}

function clearAll() {
    workingNumbers.innerHTML = '0'
}
function deleteInput() {
    workingNumbers.innerHTML = workingNumbers.innerHTML.slice(0, -1)
}