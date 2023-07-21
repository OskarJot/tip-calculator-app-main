console.log('Hello');

const billValue = document.querySelector('.billValue');
const buttonTip = document.querySelectorAll('.button-tip');
const numPeople = document.querySelector('.peopleValue');

function toogleClass(elem, className) {
	if (elem.classList.contains(className)) {
		return;
	}

	const siblings = [...buttonTip];
	siblings.forEach((sibling) => {
		sibling.classList.remove(className);
	});
	elem.classList.add(className);
}

function getValueBill() {
	console.log(billValue.value);
}

function getValueTip(valueTip) {
	console.log(valueTip);
}

function getValuePeople() {
	console.log(numPeople.value);
}

billValue.addEventListener('keyup', getValueBill);
numPeople.addEventListener('keyup', getValuePeople);
buttonTip.forEach((button) => {
	button.addEventListener('click', () => {
		toogleClass(button, 'clicked');
		getValueTip(button.innerHTML);
	});
});
