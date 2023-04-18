const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener("click", () => {
	disabledBtn(true);
	startTimer();
});

stopBtn.addEventListener("click", () => {
	clearInterval(timerId);
	disabledBtn(false);
});

function disabledBtn(isDisabled) {
	startBtn.disabled = isDisabled;
};

function startTimer() {
		timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

