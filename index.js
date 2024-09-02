var num1 = Math.floor(Math.random()*6) + 1;
var num2 = Math.floor(Math.random()*6) + 1;
var dice1Name = "./images/dice" + num1 + ".png";
var dice2Name = "./images/dice" + num2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , dice1Name);
document.querySelectorAll("img")[1].setAttribute("src" , dice2Name);
if(num1 > num2){
    document.querySelector("h1").textContent = "Player1 Wins!";
}
else if(num1 < num2){
    document.querySelector("h1").textContent = "Player2 Wins!";
}
else{
    document.querySelector("h1").textContent = "Draw!"
}