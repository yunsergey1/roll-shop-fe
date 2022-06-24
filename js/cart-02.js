const cartWrapper = document.querySelector('.cart-wrapper');

// отслеживаем клик по странице

window.addEventListener('click', e => {

	// проверяем что клик был совершен по "Добавить в корзину"

	if (e.target.hasAttribute('data-cart')) {
		// находим карточку с товаром, внутри которой был соверен клик
		// console.log(e.target.closest('.card'));
		const card = e.target.closest('.card');
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: +card.querySelector('[data-counter]').innerText,
		}
		// console.log(card.querySelector('.product-img').getAttribute('src'))
		// console.log(card.querySelector('.item-title').innerText)
		// console.log(card.querySelector('[data-items-in-box]').innerText)
		// console.log(card.querySelector('.price__weight').innerText)
		// console.log(card.querySelector('.price__currency').innerText)
		// console.log(card.querySelector('[data-counter]').innerText)

		// console.log(productInfo);
		// Проверяем есть ли такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// console.log(itemInCart)

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = +counterElement.innerText + +productInfo.counter;
		} else {
			
			// Подставляем собранные данные в шаблон для товаров в корзине
			const cartItemHTML = `
				<div class="cart-item" data-id="${productInfo.id}">
					<div class="cart-item__top">
						<div class="cart-item__img">
							<img src="${productInfo.imgSrc}" alt="">
						</div>
						<div class="cart-item__desc">
							<div class="cart-item__title">${productInfo.title}</div>
							<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

							<!-- cart-item__details -->
							<div class="cart-item__details">

								<div class="items items--small counter-wrapper">
									<div class="items__control" data-action="minus">-</div>
									<div class="items__current" data-counter="">${productInfo.counter}</div>
									<div class="items__control" data-action="plus">+</div>
								</div>

								<div class="price">
									<div class="price__currency">${productInfo.price}</div>
								</div>

							</div>
							<!-- // cart-item__details -->

						</div>
					</div>
				</div>
			`;

			// Помещаем шаблон для товаров в корзину
			cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML);
		}

		// Сбрасываем счетчик на 1
		card.querySelector('[data-counter]').innerText = "1";

		// Отображаем статус корзины
		toggleCartStatus();

		// Пересчитываем общую стоимость товаров в корзине
		calcCartPriceAndDelivery();
	}
})