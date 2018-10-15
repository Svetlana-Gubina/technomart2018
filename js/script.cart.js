var overlay = document.querySelector(".modal-overlay");
var buy = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-cart");
var closeCart = cartPopup.querySelector(".cart-close");
var cartLink = document.querySelector(".cart-link");
var cont = cartPopup.querySelector(".button-continue");
var counter = document.querySelector(".counter");

for (var i = 0; i < buy.length; i++) {
	buy[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		cartPopup.classList.add("modal-show");
		overlay.classList.add("modal-show");
		var num = Number(counter.innerHTML);
		counter.innerHTML = num += 1;
	});
}

closeCart.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
	cartLink.classList.add("cart-red");

});

cont.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
	cartLink.classList.add("cart-red");

});
