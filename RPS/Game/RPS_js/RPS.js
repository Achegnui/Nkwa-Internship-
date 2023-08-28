const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display_comp = document.getElementById("display_comp");
const object = document.getElementById("object");
const display = document.getElementById("display");
const score = document.getElementById("score");
// array of objects containing two keys one for name of object and the other image for image of object
const objects = [
  {
    name: "rock",
    image: `<img src="../Game/RPS_css/rock.jpg" style = "height: 100%; width: 100%; border-radius: 0.5em;"/>`,
  },
  {
    name: "paper",
    image: `<img src="../Game/RPS_css/paper.jpg" style = "height: 100%; width: 100%; border-radius: 0.5em;"/>`,
  },
  {
    name: "scissors",
    image: `<img src="../Game/RPS_css/scissors.jpg" style = "height: 100%; width: 100%; border-radius: 0.5em;"/>`,
  },
];

let userPoint = 0;
let CompPoint = 0;
let maxRounds = 3;
let currentRound = 0;

//countDown function creates a 3 second counter which is called in each addEventListener. it displays in the timer div
async function countDown() {
  let countdown = 3;

  if (currentRound < maxRounds) {
    const interval = setInterval(() => {
      // setInterval: repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
      if (countdown === 0) {
        timer.textContent = "GO";
        //clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval()
        clearInterval(interval);
      } else {
        timer.textContent = countdown;
      }
      countdown--;
    }, 1000);
  }
}

countDown();
//why isn't working.
//we have event addEventListeners each containintwo functions which have been called and shall be expplained below
//the rock.addEventListener uses the display to display the image of a rock from the array Objects and randomisation done for the computer to display its own image(random()) and comparison done to award a point(compare())
rock.addEventListener("click", function () {
  display.innerHTML = objects[0].image;
  const user_Selection = objects[0].name;
  random();
  compare(user_Selection);
});

//the paper.addEventListener uses the display to display the image of a paper from the array Objects and randomisation done for the computer to display its own image and comparison done to award a point
paper.addEventListener("click", function () {
  display.innerHTML = objects[1].image;
  const user_Selection = objects[1].name;
  random();
  compare(user_Selection);
});

//the scissors.addEventListener uses the display to display the image of a scissors from the array Objects and randomisation done for the computer to display its own image and comparison done to award a point
scissors.addEventListener("click", function () {
  display.innerHTML = objects[2].image;
  const user_Selection = objects[2].name;
  random();
  compare(user_Selection);
});

//const timer gets the element ID of the timer div
const timer = document.getElementById("timer");

//random function randomises images that will be place in the computer's display
function random() {
  var rand = Math.floor(Math.random() * objects.length);

  const randomObject = objects[rand];
  const value = Object.values(randomObject)[1];
  //displays the image of the random object in the array
  display_comp.innerHTML = value;
  //returns the name of the object for comparism
  return randomObject.name;
}

//this is the compare function which compares and awards points accordingly and also stopping usage of the addEventlisteners and displays Game over in the timer div
//this function is in charged of creating a method to make the game run in 3 rounds
function compare(user_Selection) {
  const comp_Selection = random();
  currentRound++;
  console.log(currentRound);

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
    if (currentRound <= maxRounds) {
      countDown();
    }
  } else {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    if (userPoint === CompPoint) {
      timer.textContent = `Game Over It's a tie`;
    } else if (userPoint > CompPoint) {
      timer.textContent = `Game Over You won the Game`;
    } else {
      timer.textContent = `Game Over You lost the Game`;
    }
  }
}
