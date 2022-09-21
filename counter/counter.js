let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr
}

function refresh() {
    count = 0
    countEl.innerText = count
}
 let firstName = "Emmanuel"
 let lastName = "Saka"
 let fullName = firstName + " " + lastName
 console.log(fullName)
