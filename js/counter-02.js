// добавляем отслеживание клика на всем окне

window.addEventListener('click', (e) => {
	// запись e.target.dataset.action означает обращение к атрибуту data-action
	// console.log(e.target.dataset.action) 

	let counter; // Объявляем переменную для счетчика. 

	// проверяем клик строго по кнопкам плюс или минус
	if (e.target.dataset.action == 'plus' || e.target.dataset.action == 'minus') {
		// находим обертку (родительский блок)счетчика
		const counterWrapper = e.target.closest('.counter-wrapper');
		// console.log(counterWrapper);
		// находим счетчик в родителе
		counter = counterWrapper.querySelector('[data-counter]');

	};


	if (e.target.dataset.action == 'plus') {

		counter.innerText = ++ counter.innerText;
		
	};

	if (e.target.dataset.action == 'minus') {

		if (+counter.innerText > 1) {
			counter.innerText = --counter.innerText;
		}

		else if (e.target.closest('.cart-wrapper') && +counter.innerText == 1) {
			
			e.target.closest('.cart-item').remove();

		// Отображаем статус корзины
		toggleCartStatus();

		// Пересчитываем общую стоимость товаров в корзине
		calcCartPriceAndDelivery();
		}
	};

	if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
		// Пересчитываем общую стоимость товаров в корзине
		calcCartPriceAndDelivery();
	};
})