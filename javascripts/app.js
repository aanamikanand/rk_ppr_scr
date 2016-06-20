var userSelection = "";
var compSelection ="";
var answer = "";

function getInput(input) {
  userSelection = input;
  compInput();
  compare(userSelection, compSelection);
  winner();
  compOutput();
  userOutput();
}

function compInput() {
  compSelection = Math.random();
  if (compSelection < 0.34) {
    compSelection = "Rock";
  } else if (compSelection <= 0.67) {
    compSelection = "Paper";
  } else {
    compSelection = "Scissors";
  }
}

function compare(selection1, selection2) {

  if(selection1 === selection2) {
    answer = "Its a tie!";
  }
  else if(selection1 === "Rock") {
    answer = (selection2 === 'Paper') ? "you lose!" : "you win!";
  }
  else if(selection1 === "Paper") {
    answer = (selection2 === 'Rock') ? "you win!" : "you lose!";
  }
  else if(selection1 === 'Scissors') {
    answer = (selection2 === 'Rock') ? "you lose!" : "you win!";
  }
  return answer
}

function compOutput() {
  var compOutput = document.getElementById("comp_output");
  compOutput.innerHTML = "Computer chose: " + compSelection;
}

function userOutput() {
  var yourOutput = document.getElementById("user_output");
  yourOutput.innerHTML = "You Chose: " + userSelection;
}

function winner() {
  var output = document.getElementById("output");
  output.innerHTML = answer;
}


