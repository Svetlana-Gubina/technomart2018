var link = document.querySelector(".button-write");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".message-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var mapMini = document.querySelector(".link-map");
var map = document.querySelector(".modal-map");
var closeMap = map.querySelector(".map-close");
var warranty = document.querySelector(".warranty");
var delivery = document.querySelector(".delivery");
var credit = document.querySelector(".credit");
var slide1 = document.getElementById("delivery");
var slide2 = document.getElementById("garantee");
var slide3 = document.getElementById("credit");

mapMini.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.add("modal-show");
	overlay.classList.add("modal-show");
});
closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-show");
	login.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			overlay.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});

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
