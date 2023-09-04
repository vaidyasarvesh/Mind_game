let gameInProgress = false;
let timerValue = 30; // Change this to your desired max timer value
let score = 0;
let timerInterval;
let correctOption; // Store the correct option value

const startButton = document.getElementById('start-btn');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const radioButtons = document.getElementsByName('option');
const selectRandomButton = document.getElementById('select-random-btn'); // Add this line

startButton.addEventListener('click', () => {
  if (gameInProgress) {
    // If the game is already in progress, reset the game
    endGame();
    return;
  }

  initializeGame();
});

// Add event listeners to radio buttons
for (const radioButton of radioButtons) {
  radioButton.addEventListener('click', () => {
    if (gameInProgress) {
      if (radioButton.value === correctOption) {
        increaseScore();
      }
      selectRandomRadioButton();
    }
  });
}

// Add event listener for the selectRandomButton
selectRandomButton.addEventListener('click', () => {
  if (gameInProgress) {
    increaseScore();
    selectRandomRadioButton();
  }
});

function initializeGame() {
  gameInProgress = true;
  startButton.disabled = true;
  selectRandomRadioButton();
  updateScore(0);
  startTimer();
}

function selectRandomRadioButton() {
  const randomIndex = Math.floor(Math.random() * radioButtons.length);
  radioButtons[randomIndex].checked = true;
  correctOption = radioButtons[randomIndex].value; // Store the correct option
}

function startTimer() {
  timerInterval = setInterval(() => {
    timerValue--;
    if (timerValue >= 0) {
      timerElement.textContent = timerValue + ' seconds';
    } else {
      endGame();
    }
  }, 1000);
}

function updateScore(newScore) {
  score = newScore;
  scoreElement.textContent = score;
}

function increaseScore() {
  score++;
  updateScore(score);
}

function endGame() {
  gameInProgress = false;
  clearInterval(timerInterval);
  startButton.disabled = false;
  alert('Game Over!\nYour score: ' + score);
  timerValue = 5; // Reset the timer value
  timerElement.textContent = timerValue + ' seconds';
}


























// function startGame() {


//     const countdownElement = document.getElementById('time'); // Replace with your HTML element

//     const countdownDuration = 5; // Countdown duration in seconds
//     let remainingTime = countdownDuration;

//     function updateCountdown() {
//         countdownElement.textContent = `${remainingTime} sec`;

//         if (remainingTime <= 0) {


//             clearInterval(countdownInterval);
//              countdownElement.textContent = '0';

//               return;
//         }


//         remainingTime--;
//     }

//    updateCountdown(); // Initial call to set the initial content
//         const countdownInterval = setInterval(updateCountdown, 1000); // Update every 1 second  
    
    
//         const randomButton = document.getElementById('btn');
//         const radioButtons = document.querySelectorAll('input[type="radio"][name="option"]');
    
//      randomButton.addEventListener('click', () => {
//             const randomIndex = Math.floor(Math.random() * radioButtons.length);
//             radioButtons[randomIndex].checked = true;
    
//              randomButton.disabled = true;
//         });
//  }



