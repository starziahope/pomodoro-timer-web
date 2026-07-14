const STORAGE_KEY = "pomodoroMinutes";
const DEFAULT_MINUTES = 25;

function getTotalSeconds() {
  const savedMinutes = Number(localStorage.getItem(STORAGE_KEY));
  const minutes = Number.isInteger(savedMinutes) && savedMinutes > 0 ? savedMinutes : DEFAULT_MINUTES;
  return minutes * 60;
}

const totalSeconds = getTotalSeconds();

let remainingSeconds = totalSeconds;
let timerId = null;

const timeDisplay = document.getElementById("time-display");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (timerId !== null) {
    return;
  }

  timerId = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    if (remainingSeconds <= 0) {
      stopTimer();
      alert("타이머가 종료되었습니다!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = totalSeconds;
  updateDisplay();
}

updateDisplay();
