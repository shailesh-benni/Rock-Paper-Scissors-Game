var display = document.getElementById("display");
var move = document.getElementById("move");
var computer = document.getElementById("computer");
var player = document.getElementById("player");

function selected(text) {
    const options = ['Rock', 'Paper', 'Scissor'];
    var num = Math.floor(Math.random() * 3);
    move.innerHTML = text + " vs " + options[num];
    if(text === options[num]){
        display.innerHTML = "Draw ";
    }
    else if(text == "Rock" && options[num] == "Scissor"){
        player.innerHTML = parseInt(player.innerHTML) + 1;
        display.innerHTML = "You Won! ";
    }
    else if(text == "Rock" && options[num] == "Paper"){
        computer.innerHTML = parseInt(computer.innerHTML) + 1;
        display.innerHTML = "Computer Won! ";
    }
    
    else if(text == "Paper" && options[num] == "Scissor"){
        computer.innerHTML = parseInt(computer.innerHTML) + 1;
        display.innerHTML = "Computer Won! ";
    }
    else if(text == "Paper" && options[num] == "Rock"){
        player.innerHTML = parseInt(player.innerHTML) + 1;
        display.innerHTML = "You Won! ";
    }

    else if(text == "Scissor" && options[num] == "Rock"){
        computer.innerHTML = parseInt(computer.innerHTML) + 1;
        display.innerHTML = "Computer Won! ";
    }
    else if(text == "Scissor" && options[num] == "Paper"){
        player.innerHTML = parseInt(player.innerHTML) + 1;
        display.innerHTML = "You Won!";
    }
}

function resetButton(){
    player.innerHTML = 0; 
    computer.innerHTML = 0;
    display.innerHTML = "Let's Play With Computer";
    move.innerHTML = "Choose Your Move";
}
