
let cards = []
let hasBlackjack = false
let isAlive = false;
let message = "";
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let startGameEl = document.getElementById("start-game")
let cardNo1 = document.getElementById("card-no-1");
let cardNo2 = document.getElementById("card-no-2");
let cardNo3 = document.getElementById("card-no-3");

let player = {
    coins: 200,
    name: "PlayerName"

}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : Rs " + player.coins;

function startGame() {
    isAlive = true
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
    startGameEl.style.visibility = "collapse"

    // if(firstCard>5){
    //     cardNo1.setAttribute("src","./asset/1-card.png")
    // }

    // if(secondCard>5){
    //     cardNo2.setAttribute("src","./asset/2-card.png")
    // }

    renderCards();



}
function getRandomNum() {
    let num = Math.floor(Math.random() * 12) + 1;
    if (num === 1) {
        return 11;
    }
    else if (num > 10) {
        return 10;
    }
    else {
        return num;
    }
}

function renderGame() {
    sumEl.textContent = "Total : " + sum;
    cardEl.textContent = "Cards: ";




    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " , "
    }

    if (sum <= 20) {
        message = "Do you want to draw one more card ??";


    }
    else if (sum === 21) {
        message = "Yess!! , You have won the blackJack";
        hasBlackjack = true;
        startGameEl.style.visibility = "visible"
    }
    else {
        message = "you are out of the game";
        isAlive = false
        startGameEl.style.visibility = "visible"

    }

    messageEl.textContent = message;

    // console.log(message)
}
function newCard() {

    if (isAlive === true && hasBlackjack === false) {

        console.log("drawing new cards")
        let card = getRandomNum();
        sum += card;
        cards.push(card)
        renderGame();
        renderCards();

    }

    // console.log(cards)


}

function renderCards() {

    // for 1st card
    if (cards[0] === 11) {
        cardNo1.setAttribute("src", "./asset/1-card.png")
    }
    if (cards[0] === 2) {
        cardNo1.setAttribute("src", "./asset/2-card.png")
    }
    if (cards[0] === 3) {
        cardNo1.setAttribute("src", "./asset/3-card.jpg")
    }
    if (cards[0] === 4) {
        cardNo1.setAttribute("src", "./asset/4-card.png")
    }
    if (cards[0] === 5) {
        cardNo1.setAttribute("src", "./asset/5-card.png")
    }
    if (cards[0] === 6) {
        cardNo1.setAttribute("src", "./asset/6-card.jpg")
    }
    if (cards[0] === 7) {
        cardNo1.setAttribute("src", "./asset/7-card.jpg")
    }
    if (cards[0] === 8) {
        cardNo1.setAttribute("src", "./asset/8-card.jpg")
    }
    if (cards[0] === 9) {
        cardNo1.setAttribute("src", "./asset/9-card.jpg")
    }
    if (cards[0] === 10) {
        cardNo1.setAttribute("src", "./asset/11-card.jpg")
    }

    // for 2nd card
    if (cards[1] === 11) {
        cardNo2.setAttribute("src", "./asset/1-card.png")
    }
    if (cards[1] === 2) {
        cardNo2.setAttribute("src", "./asset/2-card.png")
    }
    if (cards[1] === 3) {
        cardNo2.setAttribute("src", "./asset/3-card.jpg")
    }
    if (cards[1] === 4) {
        cardNo2.setAttribute("src", "./asset/4-card.png")
    }
    if (cards[1] === 5) {
        cardNo2.setAttribute("src", "./asset/5-card.png")
    }
    if (cards[1] === 6) {
        cardNo2.setAttribute("src", "./asset/6-card.jpg")
    }
    if (cards[1] === 7) {
        cardNo2.setAttribute("src", "./asset/7-card.jpg")
    }
    if (cards[1] === 8) {
        cardNo2.setAttribute("src", "./asset/8-card.jpg")
    }
    if (cards[1] === 9) {
        cardNo2.setAttribute("src", "./asset/9-card.jpg")
    }
    if (cards[1] === 10) {
        cardNo2.setAttribute("src", "./asset/11-card.jpg")
    }

    // for 3rd 
    if (cards[2] === 11) {
        cardNo3.setAttribute("src", "./asset/1-card.png")
    }
    if (cards[2] === 2) {
        cardNo3.setAttribute("src", "./asset/2-card.png")
    }
    if (cards[2] === 3) {
        cardNo3.setAttribute("src", "./asset/3-card.jpg")
    }
    if (cards[2] === 4) {
        cardNo3.setAttribute("src", "./asset/4-card.png")
    }
    if (cards[2] === 5) {
        cardNo3.setAttribute("src", "./asset/5-card.png")
    }
    if (cards[2] === 6) {
        cardNo3.setAttribute("src", "./asset/6-card.jpg")
    }
    if (cards[2] === 7) {
        cardNo3.setAttribute("src", "./asset/7-card.jpg")
    }
    if (cards[2] === 8) {
        cardNo3.setAttribute("src", "./asset/8-card.jpg")
    }
    if (cards[2] === 9) {
        cardNo3.setAttribute("src", "./asset/9-card.jpg")
    }
    if (cards[2] === 10) {
        cardNo3.setAttribute("src", "./asset/11-card.jpg")
    }


}


