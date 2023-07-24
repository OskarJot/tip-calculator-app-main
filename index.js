console.log('Hello');

let billCost;
let tipLevel;
let numberOfPeople;
let tipAmount;
let Total;

const billValue = document.querySelector('.billValue');
const buttonTip = document.querySelectorAll('.button-tip');
const numPeople = document.querySelector('.peopleValue');
const alertMsg = document.querySelector('.alert');

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
		alertMsg.classList.remove('alert');
		alertMsg.classList.add('noalert');
		numPeople.classList.add('noalert');
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
	});
	button.addEventListener('keyup', () => {
		getValueTip(button);
	});
});

function splitterTip(billCost, tipLevel, numberOfPeople) {
	Total = billCost + billCost * (tipLevel / 100);
	console.log(Total);
	tipAmount = (billCost * (tipLevel / 100)) / numberOfPeople;
	console.log(tipAmount);
}
