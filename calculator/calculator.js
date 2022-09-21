let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let resultsEl = document.getElementById("results-el")
let results = 0
console.log(num1)
function add() {
    results = num1+num2
    resultsEl.textContent= results
}
function sub() {
    results = num1 -num2
    resultsEl.textContent = results
}
function multiply() {
    results = num1 * num2
    resultsEl.textContent = results
}
function divide(){
    results = num1 / num2
    resultsEl.textContent = results
}
