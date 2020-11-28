//This function holds everything
const game = () =>{
    
    let pScore=0;
    let cScore=0;
    //Function to start the game
    const start = () => {
        const playBtn=document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        const match=document.querySelector(".match");
        playBtn.addEventListener("click", () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Game Play
    const play= ()=>
    {
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const computerHand=document.querySelector(".computer-hand");
        const hands=document.querySelectorAll(".hands img");
        hands.forEach(hand=>{
            hand.addEventListener("animationend", function(){
                this.style.animation="";
            });
        });
        //Computer Options
        const computerOptions=["rock","paper","scissors"];
        options.forEach(Option=>{
            Option.addEventListener("click", function(){
                //To generate random computer choice
                const rand=Math.floor(Math.random()*3);
                const computerChoice=computerOptions[rand];
             setTimeout(()=>{
                    //Call the compareHands function

                compareHand(this.textContent,computerChoice); 



                //Update Images
                playerHand.src=`assests/${this.textContent}.png`;
                computerHand.src=`assests/${computerChoice}.png`;
             }, 2000);

                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";


            });
        });
    }; 
   
   function  scoreCheck()
    {
        if(pScore>=3||cScore>=3)
        {
       
            setTimeout(function(){
                alert("Game over");
                window.location.reload(true);
            },3000);
                
          
        }
        
    }
    //To update score
    const updateScore=()=>
    {
        const playerScore=document.querySelector(".player-score p");
        const computerScore=document.querySelector(".computer-score p");
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    
    };





    const compareHand=(playerChoice, computerChoice)=>{
        //update the result
        const winner=document.querySelector(".winner");
        //check for tie
        if(playerChoice===computerChoice)
        {
            winner.textContent="It is a tie";
            return;
        }
        //Check for ROCK
        if(playerChoice==='rock')
        {
            if(computerChoice=='paper')
            {
                winner.textContent="Computer Wins";
              
                
                    cScore++;
                    scoreCheck();
                    updateScore();
                    
                    
                    return;

            }
               
            else{
               
                    winner.textContent="You Win";
                    pScore++;
                    scoreCheck();
                    updateScore();
                    
                    return;

                
            }
        }
        //Check for PAPER
        if(playerChoice==='paper')
        {
            if(computerChoice=='scissors')
            {
                winner.textContent="Computer Wins";
                cScore++;
                scoreCheck();
                updateScore();
                
                return;
            }
            else{
                winner.textContent="You Win";
                pScore++;
                scoreCheck();
                updateScore();
                
                return;
            }
        }
        //Check for SCISSORS
        if(playerChoice==='scissors')
        {
            if(computerChoice=='rock')
            {
                winner.textContent="Computer Win";
                cScore++;
                scoreCheck();
                updateScore();
                
                return;
            }
            else{
                winner.textContent="You Win";
                pScore++;
                scoreCheck();
                updateScore();
                
                return;
            }
        }



        
    }




    start();
    play();

}
game();