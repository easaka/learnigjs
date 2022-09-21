let firstCard = 3
let secondCard = 11
let cards = [firstCard,secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard


function startGame() {
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message="Do you want to draw a new card"
    }
    else  if (sum > 21){
        message="Sorry, you lost"
        isAlive = false
    }
    else{
        message="Congrats on your victory"
        hasBlackJack = true
    }
    let cardsEl = document.getElementById("cards-el")

    document.getElementById("message-el").textContent = message
    document.querySelector("#sum-el").textContent = "Sum: " + sum
    cardsEl.textContent="Cards: "
    for (let i = 0; i < cards.length;i++){
    cardsEl.textContent += cards[i]+","
    }
}

function newCard() {
    console.log("Drawing out new card from the deck!!!")
    let newCard=3
    cards.push(newCard)
    sum+=newCard
    renderGame()
}

