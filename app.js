let el = document.querySelector("button");
el.addEventListener("click", function(){
    let userChoice = prompt("What Do you Want: Rock, Paper or Scissors?").toLowerCase();
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = options[randomNumber];
    alert("The Computer has picked " + computerChoice);

    if (computerChoice == userChoice) {
        alert("You have both picked the same. Try again");
    }

    else if (userChoice == "rock"){
        if (computerChoice == "paper"){
            alert("You lose.");
        }
        else if (computerChoice = "scissors"){
            alert("You win.");
        }
    }

    else if (userChoice == "scissors"){
        if (computerChoice == "rock"){
            alert("You lose.");
        }
        else if (computerChoice == "paper"){
            alert("You win.");
        }
    }

    else if (userChoice == "paper"){
        if (computerChoice == "scissors"){
            alert("You lose.");
        }
        else if (computerChoice == "rock"){
            alert("You win.");
        }
    }

    else {
        alert("You have selected an invalid choice.")
    }

});