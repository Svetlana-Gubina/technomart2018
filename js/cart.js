'use strict';
(function () {
	var overlay = document.querySelector(".modal-overlay");
	var cartPopup = document.querySelector(".modal-cart");
	var cartLink = document.querySelector(".cart-link");
	var counterCart = document.querySelector(".counter-cart");
	var closeCart = cartPopup.querySelector(".cart-close");
	var continueButton = cartPopup.querySelector(".button-continue");
	var tab = document.querySelector(".tab");
	var counterMark = document.querySelector(".counter-mark");

	// Увеличение счетчика
	var raiseCounter = function (counter, elem) {
		var num = Number(counter.innerHTML);
		counter.innerHTML = num += 1;
		elem.style.backgroundColor = "#ee3643";
	};

	var modalCartClose = function () {
		cartPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");

		document.removeEventListener('keydown', onModalEscPress);
		closeCart.removeEventListener("click", modalCartClose);
		continueButton.removeEventListener("click", modalCartClose);
	};
	var onModalEscPress = function (evt) {
		if (evt.keyCode === 27) {
			modalCartClose();
		}
	};
	var onModalEnterPress = function (evt) {
		if (evt.keyCode === 13) {
			modalCartClose();
		}
	};
	var modalCartOpen = function () {
		cartPopup.classList.add("modal-show");
		overlay.classList.add("modal-show");
		raiseCounter(counterCart, cartLink);

		document.addEventListener('keydown', onModalEscPress);
		closeCart.addEventListener("click", modalCartClose);
		continueButton.addEventListener("click", modalCartClose);
		closeCart.addEventListener('keydown', onModalEnterPress);
		continueButton.addEventListener('keydown', onModalEnterPress);
	};

	// Обработчик клика по кнопке "Купить"
	var buttonBuyClickHandler = function () {
		var buy = document.querySelectorAll(".buy");
		for (var i = 0; i < buy.length; i++) {
			buy[i].addEventListener("click", modalCartOpen);
		};
	};

	// Обработчик клика по кнопке "В закладки"
	var buttonMarkClickHandler = function () {
		var bookmarks = document.querySelectorAll(".bookmark");
		for (var j = 0; j < bookmarks.length; j++) {
			bookmarks[j].addEventListener("click", function (evt) {
				evt.preventDefault();
				raiseCounter(counterMark, tab);
			})
		};
	};

	window.cart = {
		buttonBuyClickHandler: buttonBuyClickHandler,
		buttonMarkClickHandler: buttonMarkClickHandler,
		overlay: overlay
	};
})();
