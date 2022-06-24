calcCartPriceAndDelivery = () => {
	const cartItems = document.querySelectorAll('.cart-item');

	const totalPriceEl = document.querySelector('.total-price');

	const deliveryCost = document.querySelector('.delivery-cost');

	const cartDelivery = document.querySelector('[data-cart-delivery]');
	console.log(cartDelivery)

	// Рассчитываем стоимость доставки
	let totalPrice = 0;
	cartItems.forEach(item => {
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.price__currency');
		// console.log('amount: ' + +amountEl.innerText);
		// console.log(parseInt(priceEl.innerText));

		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
		// console.log('sum = ' + currentPrice)
		totalPrice += currentPrice;
	})
	console.log('total price = '+ totalPrice) 

	totalPriceEl.innerText = totalPrice;

	// Скрываем или показываем стоимость доставки
	if (totalPrice > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Выводим стоимость доставки в HTML
	if (totalPrice >= 600) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'Бесплатно'
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '300 ₽';
	}
}

calcCartPriceAndDelivery();