console.log('Hello');

let billCost;
let tipLevel;
let numberOfPeople;
let tipAmount;
let Total;

const billValue = document.querySelector('.spilitter_input--billValue');
const buttonTip = document.querySelectorAll('.button--tip');
const numPeople = document.querySelector('.peopleValue');
const alertMsg = document.querySelector('.splitter_title--alert');
const tipPrice = document.querySelector('.splitter-score-col-tip-price');
const totalPrice = document.querySelector('.splitter-score-col-total-price');

function toogleClass(elem, className) {
	if (elem.classList.contains(className)) {
		elem.classList.remove(className);
		return;
	}

	const siblings = [...buttonTip];
	siblings.forEach((sibling) => {
		sibling.classList.remove(className);
	});
	elem.classList.add(className);
}

function getValueBill() {
	billCost = billValue.value * 1;
	console.log(billCost);
}

function getValueTip(valueTip) {
	tipLevel = valueTip.value * 1;
	console.log(tipLevel);
}

function getValuePeople() {
	numberOfPeople = numPeople.value * 1;
	if (numberOfPeople > 0) {
		alertMsg.classList.remove('splitter_title--alert');
		alertMsg.classList.add('noalert');
		numPeople.classList.add('noalert');
		alertMsg.innerHTML = '';
	}
	console.log(numberOfPeople);
	splitterTip(billCost, tipLevel, numberOfPeople);
}

billValue.addEventListener('keyup', getValueBill);
numPeople.addEventListener('keyup', getValuePeople);
buttonTip.forEach((button) => {
	button.addEventListener('click', () => {
		toogleClass(button, 'clicked');
		getValueTip(button);
		splitterTip();
	});
	button.addEventListener('keyup', () => {
		getValueTip(button);
		splitterTip();
	});
});

function splitterTip(billCost, tipLevel, numberOfPeople) {
	Total = (billCost + billCost * (tipLevel / 100)) / numberOfPeople;
	totalPrice.innerHTML = Total;
	tipAmount = (billCost * (tipLevel / 100)) / numberOfPeople;
	tipPrice.innerHTML = tipAmount;
}
