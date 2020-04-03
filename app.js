window.onload = () => {

    const playerButtons = document.querySelectorAll('.playerButton');
    // console.log(playerButtons);
    const result = document.querySelector('.gameDeclaration');
    const gameOutcome = document.getElementById('outcome');
    
    let playerMove;
    
        for (i = 0; i < playerButtons.length; i++) {
            playerButtons[i].addEventListener ("click", (event) => {
                playerMove = event.target.value;
                const computerNumber = Math.floor(Math.random()*3);
                const movesArray = ["rock", "paper", "scissors"]  
                const computerMove = movesArray[computerNumber];  
                console.log("Player chose " + playerMove, "vs. Computer chose " + computerMove)
                gameOutcome.innerHTML = ("Player chose " + playerMove, "vs. Computer chose " + computerMove); 
    
                if (playerMove === "rock" && computerMove === "scissors" ||
                    playerMove === "paper" && computerMove ===  "rock" ||
                    playerMove === "scissors" && computerMove === "paper") {
                    answer.innerHTML = ("Player wins");
                    // gameOutcome.innerHTML = ("Player chose " + playerMove, "vs. Computer chose " + computerMove); 
                } else if 
                    (playerMove === "rock" && computerMove === "paper" ||
                    playerMove === "paper" && computerMove === "scissors"||
                    playerMove === "scissors" && computerMove === "rock") {
                    answer.innerHTML = ("Computer wins");
                } else 
                answer.innerHTML = ("It's a draw");
            });
            
        }
    }





