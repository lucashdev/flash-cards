var a = document.getElementById("a");
var b = document.getElementById("b");
var msg = document.getElementById("msg");
var again = document.getElementById("again");
var squares = document.querySelectorAll(".square");
var answer = "";
var score = 0;

function reset() {
  var aRandom = random();
  var bRandom = random();
  var arr = [];

  a.textContent = aRandom;
  b.textContent = bRandom;

  answer = aRandom * bRandom;

  for (var i = 1; i < squares.length; i++) {
    arr.push(distractors(i));
  }

  function distractors(i) {
    if (i < 3) {
      return answer + random();
    } else {
      return answer - random();
    }
  }

  arr.push(answer);

  arr = shuffle(arr);

  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = arr[i];
  }

  console.log("The answer is " + answer);
  console.log("The array is " + arr);
  
  setupSquares();
  
  function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].classList.remove("selected");
      squares[i].style.background = "#FFEBBE"; 
      msg.innerHTML = "";
      again.innerHTML = "Choose Your Answer";
      
      squares[i].addEventListener("click", function() {
        var clickedSquare = this.textContent;
        this.classList.add("selected");
        console.log("Player clicked on " + clickedSquare);
        
        if (clickedSquare == answer) {
          msg.innerHTML = "<span class='correct'>Correct!</span>";
          again.innerHTML = "<span class='again'>Play Again?</span>";
          this.style.background = "#4254bc"; 
          } else {
          msg.innerHTML = "<span class='incorrect'>Wrong</span>";
        }
        
      }); 
      
    } 
  } 
  
} 

reset();


function random() {
  var randomNumber = Math.floor(Math.random() * 11) + 2;
  return randomNumber;
}

again.addEventListener("click", function() {
  reset();
  console.log("New game started.");
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}