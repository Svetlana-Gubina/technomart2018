'use strict';
(function () {
	var warranty = document.querySelector(".warranty");
	var delivery = document.querySelector(".delivery");
	var credit = document.querySelector(".credit");
	var slide1 = document.getElementById("delivery");
	var slide2 = document.getElementById("garantee");
	var slide3 = document.getElementById("credit");

	// Сервисы

	warranty.addEventListener("click", function (evt) {
		evt.preventDefault();
		warranty.classList.add("active");
		slide2.classList.remove("visually-hidden");
		slide1.classList.add("visually-hidden");
		slide3.classList.add("visually-hidden");
		if (delivery.classList.contains("active")) {
			delivery.classList.remove("active");
		} else {
			credit.classList.remove("active");
		}
	});

	delivery.addEventListener("click", function (evt) {
		evt.preventDefault();
		delivery.classList.add("active");
		slide1.classList.remove("visually-hidden");
		slide2.classList.add("visually-hidden");
		slide3.classList.add("visually-hidden");

		if (warranty.classList.contains("active")) {
			warranty.classList.remove("active");
		} else {
			credit.classList.remove("active");
		}
	});

	credit.addEventListener("click", function (evt) {
		evt.preventDefault();
		credit.classList.add("active");
		slide3.classList.remove("visually-hidden");
		slide2.classList.add("visually-hidden");
		slide1.classList.add("visually-hidden");
		if (warranty.classList.contains("active")) {
			warranty.classList.remove("active");
		} else {
			delivery.classList.remove("active");
		}
	});
})();
