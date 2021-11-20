function generateRandomNum() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 6;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}
randomNumber1=generateRandomNum();
var element1 = document.getElementById("img1");
display(randomNumber1, element1);
randomNumber2=generateRandomNum();
var element2 = document.getElementById("img2");
display(randomNumber2, element2);
result(randomNumber1, randomNumber2);
// console.log(element1);

// console.log(randomNumber1);

function display(randomnum, elementid) {
  if (randomnum == 1) {
    elementid.src = "images/dice1.png";
  } else if (randomnum == 2) {
    elementid.src = "images/dice2.png";
  } else if (randomnum == 3) {
    elementid.src = "images/dice3.png";
  } else if (randomnum == 4) {
    elementid.src = "images/dice4.png";
  } else if (randomnum == 5) {
    elementid.src = "images/dice5.png";
  } else {
    elementid.src = "images/dice6.png";
  }
}

function result(random1,random2){
    var elementwin=document.querySelector("h1");
    if(random1==random2){
        elementwin.innerHTML="Draw!";
    }
    else if(random1>random2){
        elementwin.innerHTML='<img class="sticker" src="images/red-flag.png">Player 1 wins!';
    }
    else{
        elementwin.innerHTML='Player 2 wins!<img class="sticker" src="images/red-flag.png">';
    }
}