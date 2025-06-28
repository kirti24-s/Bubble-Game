var clutter = "";
var score = 0;
var hitran;

const inScore = () => {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
};

const newHit = () => {
   hitran = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitran;
};

const makebubble = () => {
  for (var i = 0; i < 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
};

var timer = 60;
const setTimer = () => {
  var timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector(".pbtm").innerHTML = `<h1> Game Over ! </h1>`;
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", (details) => {
var clickedNum = (Number(details.target.textContent));
if(clickedNum === hitran){
  inScore();
  makebubble();
newHit();
}
});

setTimer();
makebubble();
newHit();
// inScore();
