import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

let isInitialize = true;
let endDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
	minuteIncrement: 1,
	
	onClose(selectedDates) {
		if (isInitialize) {
			return;
		}

		endDate = selectedDates[0];

		if (endDate < options.defaultDate) {
			Notiflix.Notify.failure('Please choose a date in the future');
			disabledBtn(true);
			return;
		};

		Notiflix.Notify.info('You can start the countdown');
		disabledBtn(false);
  },
};

const inputRef = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef= document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

inputRef.addEventListener('click', flatpickrStart);
startBtn.addEventListener("click", () => startTimer());

function startTimer() {
	disabledBtn(true);
	timer.start();
};

class Timer {
	constructor({ onTick }) {
		this.intervalID = null;
		this.isActiveTimer = false;
		this.onTick = onTick;
	};

	start() {
		if (this.isActiveTimer) {
			return;
		};

		this.isActiveTimer = true;

		this.intervalID = setInterval(() => {
			const currentTime = Date.now();
			const period = endDate - currentTime;

			if (period <= 0) {
				Notiflix.Notify.warning('Timed out');
				clearInterval(this.intervalID);
				return;
			};

			this.onTick(convertMs(period));
		}, 1000);
	};

	stop() {
		clearInterval(this.intervalID);
		// this.isActiveTimer = false;
	};
};

const timer = new Timer({
	onTick: updateClockfase,
});

initialSettings();

function initialSettings() {
	disabledBtn(true);
	flatpickrStart();
	isInitialize = false;
}

function disabledBtn( isDisabled) {
	startBtn.disabled = isDisabled;
};

function flatpickrStart() {
	flatpickr(inputRef, options);
};

function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const days = Math.floor(ms / day);
	const hours = Math.floor((ms % day) / hour);
	const minutes = Math.floor(((ms % day) % hour) / minute);
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}

function updateClockfase({ days, hours, minutes, seconds }) {
	daysRef.textContent = addLeadingZero(days);
	hoursRef.textContent = addLeadingZero(hours);
	minutesRef.textContent = addLeadingZero(minutes);
	secondsRef.textContent = addLeadingZero(seconds);
};

function addLeadingZero(value) {
	return String(value).padStart(2,'0');
};
