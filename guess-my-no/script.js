var m1 = document.getElementById("msg1");
var m2 = document.getElementById("msg2");
var m3 = document.getElementById("msg3");
const num = document.querySelector('.num');

var answer = Math.floor(Math.random()*100) + 1;
var noOfGuesss = 0;
var guessedNums = [];

function play(){
    var userGuess = document.getElementById("guess").value;
    if(userGuess < 1 || userGuess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessedNums.push(userGuess);
        noOfGuesss+=1;

        if(userGuess < answer){
            m1.textContent = "Your guess is too low.";
            m2.textContent = "No. of guesses: " + noOfGuesss;
            m3.textContent = "Guessed numbers are: " + guessedNums;
        }else if(userGuess > answer){
            m1.textContent = "Your guess is too high.";
            m2.textContent = "No. of guesses: " + noOfGuesss;
            m3.textContent = "Guessed numbers are: " + guessedNums;
            
        }else if(userGuess == answer){
            m1.textContent = "Yess!!! You Win!!!";
            m2.textContent = "The Number was: " + answer;
            m3.textContent = "You guess it in " + noOfGuesss+ " guesses";
            document.getElementById("myBtn").disabled = true;
            document.getElementById("guess").disabled = true;
            num.style.backgroundImage= "url('win.gif')";
            num.style.backgroundsize= "cover";
        }
    }
}

