const myForm = document.querySelector('#myForm');
		const send = document.querySelector('#sendButton');
		
		send.addEventListener('click', event => {
			event.preventDefault();
			
			if(validateForm(myForm)){
				const data = {
					name: myForm.elements.name.value,
					phone: myForm.elements.phone.value,
					street: myForm.elements.street.value,
					home: myForm.elements.home.value,
					part: myForm.elements.hart.value,
					appt: myForm.elements.appt.value,
					floors: myForm.elements.ploors.value,
					comment: myForm.elements.comment.value
				};
				const xhr = new XMLHttpRequest();
				xhr.responseType = 'json';
				xhr.open('Post', 'https://webdev-apl.loftschool.com/sendmall');
				xhr.send(JSON.stringify(data));
				xhr.addEventListener('load', () => {
					if(xhr.response.status) {
						console.log('Все OK!');
					}
				});
			}
		});
		
		function validateForm(form) {
			let valid = true;
			
			if(!validateField(form.elements.name)){
				valid = false;
			}
			if(!validateField(form.elements.phone)){
				valid = false;
			}
			if(!validateField(form.elements.street)){
				valid = false;
			}
			if(!validateField(form.elements.home)){
				valid = false;
			}
			if(!validateField(form.elements.hart)){
				valid = false;
			}
			if(!validateField(form.elements.appt)){
				valid = false;
			}
			if(!validateField(form.elements.floors)){
				valid = false;
			}
			if(!validateField(form.elements.comment)){
				valid = false;
			}
			return valid;
		}
		
		function validateField(field) {
			field.nextElementSibling.textContent = field.validationMessage;				
			return field.checkValidity();
		}