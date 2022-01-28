var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

var randomNumber2 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImg1 = "dice" + randomNumber1 + ".png";// create a random dice1-6.png

var randomDiceImg2 = "dice" + randomNumber2 + ".png";// create a random dice1-6.png

var randomImageSource1 = "images/" + randomDiceImg1;//images/dice1-6.png

var randomImageSource2 = "images/" + randomDiceImg2;//images/dice1-6.png

var changeImg1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
var changeImg2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//draw situation
if(randomNumber1 == randomNumber2){
document.querySelector("h1").innerHTML = "Draw!";
}
//if playr 1 is win
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩  Player 1 is win!";
}

//else - player 2 won
else{
  document.querySelector("h1").innerHTML = "Player 2 is win!  🚩";
}
