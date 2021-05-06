var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = `images/dice${randomNumber1}.png`;
var randomDice2 = `images/dice${randomNumber2}.png`;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDice1);
img2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Ruan Ganhou!"
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Empate!"
}
else{
    document.querySelector("h1").innerHTML = "⭐Gibatata Ganhou!⭐"
}