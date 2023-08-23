const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display_comp = document.getElementById("display_comp");
const object = document.getElementById("object");
const display = document.getElementById("display");
const score = document.getElementById("score");
const objects = [
  {
    name: "rock",
    image: `<img src="rock.jpg" style = "height: 100%; width: 100%; border-radius: 0.5em;"/>`,
  },
  {
    name: "paper",
    image: `<img src="paper.jpg" style = "height: 100%; width: 100%; border-radius: 0.5em;"/>`,
  },
  {
    name: "scissors",
    image: `<img src="scissors.jpg" style = "height: 100%; width: 100%; border-radius: 0.5em;"/>`,
  },
];

countDown();
rock.addEventListener("click", function () {
  display.innerHTML = objects[0].image;
  const user_Selection = objects[0].name;
  random();
  compare(user_Selection);
});

paper.addEventListener("click", function () {
  display.innerHTML = objects[1].image;
  const user_Selection = objects[1].name;
  random();
  compare(user_Selection);
});

scissors.addEventListener("click", function () {
  display.innerHTML = objects[2].image;
  const user_Selection = objects[2].name;
  random();
  compare(user_Selection);
});

const timer = document.getElementById("timer");
var count;
function countDown() {
  let countdown = 4;
  const interval = setInterval(() => {
    countdown--;
    if (countdown === 0) {
      timer.textContent = "GO";

      clearInterval(interval);
    } else {
      timer.textContent = countdown;
    }
  }, 1000);
}

function random() {
  var rand = Math.floor(Math.random() * objects.length);

  const randomObject = objects[rand];
  const value = Object.values(randomObject)[1];

  display_comp.innerHTML = value;

  return randomObject.name;
}

let userPoint = 0;
let CompPoint = 0;
let maxRounds = 3;
let currentRound = 0;
function compare(user_Selection) {
  const comp_Selection = random();
  currentRound++;

  if (currentRound <= maxRounds) {
    if (user_Selection === comp_Selection) {
      timer.textContent = "Tie";
    } else if (
      (user_Selection === "rock" && comp_Selection === "scissors") ||
      (user_Selection === "paper" && comp_Selection === "rock") ||
      (user_Selection === "scissors" && comp_Selection === "paper")
    ) {
      timer.textContent = "You win";
      userPoint++;
      score.textContent = `${CompPoint} : ${userPoint}`;
    } else {
      timer.textContent = "You lose";
      CompPoint++;
      score.textContent = `${CompPoint} : ${userPoint}`;
    }
  } else {
    timer.textContent = "Game Over";

    rock.removeEventListener("click", compare);
    paper.removeEventListener("click", compare);
    scissors.removeEventListener("click", compare);
  }
}
