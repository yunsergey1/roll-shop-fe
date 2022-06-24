// Находим элементы для взаимодействия
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter');

// отслеживаем клик на btnMinus
btnMinus.addEventListener('click', () => {
	// проверяем, чтобы счетчик был больше 1
	if (parseInt(counter.innerText) > 1) { // пере
		counter.innerText = --counter.innerText;

	}

});

// отслеживаем клик на btnPlus
btnPlus.addEventListener('click', () => {
	counter.innerText = ++counter.innerText;
});