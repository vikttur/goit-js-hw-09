import Notiflix from 'notiflix';

refs = {
	form: document.querySelector('.form'),
	submitBtn: document.querySelector('button[type]'),
	delay: document.querySelector('input[name="delay"]'),
	step: document.querySelector('input[name="step"]'),
	amount: document.querySelector('input[name="amount"]'),
};

let amount = 0;
refs.form.addEventListener('submit', onClickBtn);

function onClickBtn(event) {
	event.preventDefault();

	let delay = Number(refs.delay.value);
	const step = Number(refs.step.value);
	amount = Number(refs.amount.value);

	if (!dataVerification(refs)) { 
		return;
	};

	disabledElement(true);

	for (let i = 1; i <= amount; i += 1) {
		createPromise(i, delay);
		delay += step;
	};
};

function dataVerification(obj) {
	let fieldName = '';

	switch ('') {
	case obj.delay.value:
		fieldName = 'First delay (ms)';
		break;
	case obj.step.value:
		fieldName = 'Delay step (ms)';
		break;
	case obj.amount.value:
		fieldName = 'Amount';
		break;
	default:
	};

	if (fieldName !== '') {
		Notiflix.Notify.warning(`Please fill in the field "${fieldName}"`);
		return false;
	};

	return true;
};

function disabledElement(isDisabled) {
	refs.delay.disabled = isDisabled;
	refs.step.disabled = isDisabled;
	refs.amount.disabled = isDisabled;
	refs.submitBtn.disabled = isDisabled;
};

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve({position, delay});
			} else {
				reject({position, delay});
			};

			if (amount === position) completionOfWork();
		}, delay);
	});

	promise
		.then(({ position, delay }) => {
			Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
		})
		.catch(({ position, delay }) => {
			Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
		});
};

function completionOfWork() {
	disabledElement(false);
	refs.delay.value = '';
	refs.step.value = '';
	refs.amount.value = '';
};