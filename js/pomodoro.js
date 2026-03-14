let time = 1500;
let timer = null;

const timerDisplay = document.getElementById("timer");

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerDisplay.innerText =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      clearInterval(timer);
      timer = null;
      alert("Pomodoro session complete!");
    }
  }, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  time = 1500;
  updateTimer();
});

updateTimer();