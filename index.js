console.log('Hello');

const billValue = document.querySelector('.billValue');
const buttonTip = document.querySelectorAll('.button-tip');

buttonTip.forEach((button) => {
	button.addEventListener('click', function () {
		console.log(button.textContent);
	});
});

function getValueBill() {
	console.log(billValue.value);
}

billValue.addEventListener('keyup', getValueBill);
