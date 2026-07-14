const STORAGE_KEY = "pomodoroMinutes";
const DEFAULT_MINUTES = 25;
const MIN_MINUTES = 1;
const MAX_MINUTES = 60;

const minutesInput = document.getElementById("timer-minutes");
const confirmButton = document.querySelector(".btn-confirm");

function updateConfirmButtonState() {
  confirmButton.disabled = minutesInput.value.trim() === "";
}

function saveSetting() {
  const value = minutesInput.value.trim();

  if (value === "") {
    return;
  }

  const minutes = Number(value);

  if (!Number.isInteger(minutes) || minutes < MIN_MINUTES || minutes > MAX_MINUTES) {
    alert(`타이머 시간은 ${MIN_MINUTES}분 이상 ${MAX_MINUTES}분 이하로 설정해주세요.`);
    return;
  }

  localStorage.setItem(STORAGE_KEY, String(minutes));
  location.href = "index.html";
}

const savedMinutes = localStorage.getItem(STORAGE_KEY);
minutesInput.value = savedMinutes !== null ? savedMinutes : DEFAULT_MINUTES;
updateConfirmButtonState();
