var text = "Welcome to CodeVix";
const letters = ["d", "l", "i", "c", "x", "o", "m", "w", "t", "v", "e"];
let splitText = text.split("");
let joinedText = [];

for(let i=0; i<splitText.length; i++){
  for(let j=0; j<letters.length; j++){
    let char = letters[j];
    if(splitText[i] == letters[j]){
      joinedText[i] = letters[j];
    }
    else if(splitText[i] == toUpper(char)){
      joinedText[i] = splitText[i];
    }
    else if(splitText[i] == " "){
      joinedText[i] = " ";
    }
  }
}

function toUpper(char){
  char = char.toUpperCase();
  return char;
}

const div = document.getElementById('task4');
const h1 = document.createElement('h1');
h1.textContent = joinedText.join("");
div.append(h1);







