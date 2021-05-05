let sec = 0, min = 0, hr = 0;

//to handle the state of timer running or not
let isTimeRunning = false;

//getting interval to clear time when stop is clicked
let interval;

const stopwatch = document.getElementById("stopwatch");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const startBtn = document.getElementById("startBtn");
pauseBtn.disabled = true;
stopBtn.disabled = true;
//to start the stopwatch
const start = () => {
  if (isTimeRunning === false) {
    isTimeRunning = true;
    pauseBtn.disabled = false;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    runSetInterval();
  }
}
const pause = () => {
  if (isTimeRunning === true) {
    clearInterval(interval);
    //for stop updating time, set it to false
    isTimeRunning = false;
    stopBtn.disabled = false;
    pauseBtn.innerText = "continue";
  } else {
    start();
    pauseBtn.innerText = "pause";
    stopBtn.disabled = false;
  }
}
const stop = () => {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hr = 0;
  stopwatch.innerText = `00:00:00`;
  pauseBtn.innerText = "pause";
  stopBtn.disabled = true;
  pauseBtn.disabled = true;
  startBtn.disabled = false;
  isTimeRunning = false
}
const startStopwath = () => {
  if (isTimeRunning === true) {
    sec++;
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    console.log(sec);
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec === 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min === 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr === 0) {
      hr = "0" + hr;
    }
    stopwatch.innerText = `${hr}:${min}:${sec}`;
  }
}
const runSetInterval = () => {
  interval = setInterval(startStopwath, 1000);
}