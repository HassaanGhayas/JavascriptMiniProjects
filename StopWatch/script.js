const time = document.getElementById("time");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

function updateTime() {
  time.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function Start() {
  if (interval) return;
  else {
    interval = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateTime()
    }, 1000);
  }
}

function Stop() {
    clearInterval(interval)
    interval = null;
}

function Reset(){
    stop()
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTime()
}