const myForm = document.querySelector('#myForm');
const send = document.querySelector('#sendButton');

send.addEventListener('click', event => {
	event.preventDefault();
	
	if(validateForm(myForm)) {
		const data = {
			name: myForm.elements.name.value,
			phone: myForm.elements.phone.value,
			email: myForm.elements.email.value
		};
		
		const xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
		xhr.send(JSON.stringify(data));
		xhr.addEventListener('load', () => {
			if(xhr.response.status) {
				console.log('Заказ отправлен');
			}
		});
	}
});

function validateForm(form) {
	let valid = true;
	
	if(!validateField(form.elements.name)) {
		valid = false;
	}
	if(!validateField(form.elements.phone)) {
		valid = false;
	}
	if(!validateField(form.elements.email)) {
		valid = false;
	}
	return valid;
}

function validateField(field) {
	field.nextElementSibling.textContent = field.validationMessage;
	return field.checkValidity();	
}