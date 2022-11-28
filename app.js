const input = document.getElementById('input');
const btn = document.getElementById('btn');
let isValid = true;
const textSection = document.querySelector('.text');
const error = document.querySelector('.error');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const handleClick = (e) => {
	e.preventDefault();
	let email = input.value;

	btn.classList.add('btn-clicked');
	if (regex.test(email)) {
		isValid = true;
		alert(
			'Thank you! You will get all the information soon.'
		);
	} else {
		isValid = false;
		btn.classList.add('btn-clicked');
		error.style.display = 'block';
		input.style.border = '1px solid red';
		const div = document.createElement('div');
		div.classList.add('error-text');
		console.log(div);
		div.textContent = 'Please provide a valid email';
		textSection.append(div);
	}
};

btn.addEventListener('click', handleClick);
