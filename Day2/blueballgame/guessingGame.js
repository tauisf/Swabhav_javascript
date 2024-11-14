
let value = parseInt(prompt("Enter a number "),10)

let target = Math.floor(Math.random() * value) + 1; 
let chances = 5;

let GameContainer = document.querySelector(".game-container")
let chancesDisplay = document.createElement("div");
    chancesDisplay.innerText = `Chances Left: ${chances}`;
    document.body.appendChild(chancesDisplay);
    
for(let i=1 ; i<=value ; i++){
       let divRef= document.createElement("div")
       divRef.innerText=i
       divRef.classList.add("childdiv")


       GameContainer.appendChild(divRef)
       
      

       divRef.addEventListener('click', () => {

        if (chances > 0) {
            chances--; 
            chancesDisplay.innerText = `Chances Left: ${chances}`; 
    
           
       
        let currentValue = parseInt(divRef.innerText, 10);
        if (target === currentValue) {
            divRef.setAttribute("class", "win"); 
            alert("You win ")
        }else if (target < currentValue) {
            divRef.classList.add("greater");
        }else{
            divRef.classList.add("smaller");
        }
    }

    if (chances === 0) {
        alert("Out of chances! You lose.");
       
    }
       
    });
}



   


