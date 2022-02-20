
let cards=[]
let hasBlackjack = false
let isAlive = false;
let message = "";
let sum =0;

let messageEl =document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let startGameEl = document.getElementById("start-game")
let cardNo1 = document.getElementById("card-no-1");

let player={
    coins : 200,
    name : "Krushna"

}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +" : Rs " + player.coins;

function startGame(){
    isAlive= true
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();
    cards =[firstCard,secondCard]
    sum = firstCard +secondCard
    renderGame();
    startGameEl.style.visibility = "collapse"
    cardNo1.setAttribute("src","./asset/card-1.png")


}
function getRandomNum(){
    let num = Math.floor(Math.random()*12)+1;
    if (num===1){
        return 11;
    }
    else if (num>10){
        return 10;
    }
    else{
        return num;
    }
}

function renderGame(){
    sumEl.textContent = "Total : " + sum;
    cardEl.textContent = "Cards: " ;

    

    for(let i =0;i<cards.length;i++){
        cardEl.textContent += cards[i] +" , "
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
function newCard(){

    if(isAlive === true && hasBlackjack === false){

        console.log("drawing new cards")
        let card = getRandomNum();
        sum += card;
        cards.push(card)
        renderGame();
        
    }
    
    // console.log(cards)


}

