// code for 1st dice roll

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImageSourse1= "images/" + "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",randomImageSourse1);

// code for 2nd dice roll

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSourse2= "images/" + "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomImageSourse2);

// code to announce the winner  

if(randomImageSourse1>randomImageSourse2){

    document.querySelector("h1").innerHTML="🚩 player 1 wins";
}

else if(randomImageSourse2>randomImageSourse1){

    document.querySelector("h1").innerHTML="player 2 wins 🚩";
}

else{

    document.querySelector("h1").innerHTML="draw";
}
