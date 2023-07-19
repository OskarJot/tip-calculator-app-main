console.log('Hello');

const billValue = document.querySelector('.billValue');

function getValueBill() {
	console.log(billValue.value);
}

billValue.addEventListener('keyup', getValueBill);
