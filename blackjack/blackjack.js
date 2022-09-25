let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard

function getRandomCard() {
    return Math.floor(Math.random()*13)+1
}

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
    let newCard=getRandomCard()
    cards.push(newCard)
    sum+=newCard
    renderGame()
}

