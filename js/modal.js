'use strict';
(function () {
	// Открытие и закрытие модального окна
	var modalClose = function (modal) {
		modal.classList.remove("modal-show");
		window.cart.overlay.classList.remove("modal-show");
	};

	var modalOpen = function (modal) {
		modal.classList.add("modal-show");
		window.cart.overlay.classList.add("modal-show");
	};


	// Карта
	var mapMini = document.querySelector(".link-map");
	var map = document.querySelector(".modal-map");
	var closeMap = map.querySelector(".map-close");

	var onMapEscPress = function (evt) {
		if (evt.keyCode === 27) {
			modalClose(map);
		}
	};

	mapMini.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalOpen(map);
		document.addEventListener('keydown', onMapEscPress);
	});
	closeMap.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalClose(map);
		document.removeEventListener('keydown', onMapEscPress);
	});

	// Форма
	var link = document.querySelector(".button-write");
	var popup = document.querySelector(".modal-message");
	var close = popup.querySelector(".message-close");
	var login = popup.querySelector("[name=login]");
	var form = popup.querySelector("form");
	var email = popup.querySelector("[name=email]");

	var onPopupEscPress = function (evt) {
		if (evt.keyCode === 27) {
			modalClose(popup);
		}
	};

	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalOpen(popup);
		login.focus();
		document.addEventListener('keydown', onPopupEscPress);
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalClose(popup);

		document.removeEventListener('keydown', onPopupEscPress);
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function (evt) {
		evt.preventDefault();
		if (!login.value || !email.value) {
			evt.preventDefault();
			popup.classList.add("modal-error");
		}
	});
})();
	