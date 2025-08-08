/*

const playHuman = (humanChoice) => {
   const escolhaDaMaquina = playMachine()
   alert (`Humano: ${humanChoice} | Máquina: ${escolhaDaMaquina}`);


    if (humanChoice === escolhaDaMaquina) {
        menssagem.innerHTML = "Empate!!";

    } else if (humanChoice === "rock") {
      if(escolhaDaMaquina === "scissors") {
      numberMan.innerHTML = parseInt(numberMan.innerHTML) + 1;
      menssagem.innerHTML = "Vôce venceu!!!"
      } else if (escolhaDaMaquina === "paper") {
        numberMachine.innerHTML = parseInt(numberMachine.innerHTML) + 1
        menssagem.innerHTML = "Vôce perdeu 😭"
      }
 
    }
    else if (humanChoice === "paper"){
        if(escolhaDaMaquina === "rock") {
        numberMan.innerHTML = parseInt(numberMan.innerHTML) + 1;
          menssagem.innerHTML = "Vôce venceu!!!"
        } else if (escolhaDaMaquina === "scissors"){
          numberMachine.innerHTML = parseInt(numberMachine.innerHTML) + 1 
          menssagem.innerHTML = "Vôce perdeu 😭"
        }  
    }
    else if (humanChoice === "scissors") {
        if(escolhaDaMaquina === "rock") {
         numberMachine.innerHTML = parseInt(numberMachine.innerHTML) + 1 
         menssagem.innerHTML = "Vôce perdeu 😭"
        } else if (escolhaDaMaquina === "paper") {
        numberMan.innerHTML = parseInt(numberMan.innerHTML) + 1;
          menssagem.innerHTML = "Vôce venceu!!!"
      }
    }

    CODIGO CORRETO 
   
const numberMan = document.querySelector(".span1")
const numberMachine = document.querySelector(".span2")
const result = document.querySelector(".menssagem")

let numMan = 0
let numMach = 0 

const playHuman = (humanChoice) => {
   playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const  randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

const playTheGame = (human, machine) => {
      console.log("humano: " + human + " Maquina: " + machine)

      if(human === machine) {
        result.innerHTML = "Deu empate!!"
      } else if((human === "paper" && machine === "rock") ||
       (human === "rock" && machine === "scissors") ||
       (human === "scissors" && machine === "paper")
       ){
        numMan++
        numberMan.innerHTML = numMan
        result.innerHTML = "Você gaunhou "
       }else {
        numMach++
        numberMachine.innerHTML = numMach
        result.innerHTML = "Você perdeu para a Karen"
      }
}
}
 */
const menssagem = document.querySelector(".menssagem")
const numberMan = document.querySelector(".span1")
const numberMachine = document.querySelector(".span2")

let numMan = 0
let numMach = 0 

 const playHuman = (humanChoice) =>{
  playTheGame(humanChoice, playMachine())
 }

 const playMachine = () => {
  const choices = ["rock", "paper", "scissors"]
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
 }

 const playTheGame = (human, machine) => {
  console.log("humano: " + human + " Maquina: " + machine)

  if(human === machine){
     menssagem.innerHTML = "Deu empateee!!!"
  } else if (human === "rock" && machine === "scissors" ||
    human === "paper" && machine === "rock"  ||
    human === "scissors" && machine === "paper"
  ){
    numMan++
    numberMan.innerHTML = numMan
    menssagem.innerHTML = "Você ganhou 😁!!!"
  } else {
    numMach++
    numberMachine.innerHTML = numMach
    menssagem.innerHTML = "Você perdeu 😭!!!"
  }
   
 }