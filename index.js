console.log('Hello');

const billValue = document.querySelector('.billValue');
const buttonTip = document.querySelectorAll('.button-tip');
const numPeople = document.querySelector('.peopleValue');

buttonTip.forEach((button) => {
	button.addEventListener('click', function () {
		console.log(button.textContent);
		button.classList.contains('clicked')
			? button.classList.remove('clicked')
			: button.classList.add('clicked');
	});
});

function getValueBill() {
	console.log(billValue.value);
}

function getValuePeople() {
	console.log(numPeople.value);
}

billValue.addEventListener('keyup', getValueBill);
numPeople.addEventListener('keyup', getValuePeople);
