'use strict';
(function () {
	var catalog = document.querySelector('.cat-container');
	var template = document.querySelector('#actions').content.querySelector('.actions');
	var currentElem = null;

	catalog.onmouseover = function (event) {
		if (currentElem) {
			// перед тем, как зайти в новый элемент, курсор всегда выходит из предыдущего
			//
			// если мы еще не вышли, значит это переход внутри элемента, отфильтруем его
			return;
		}
		var target = event.target;
		while (target != this) {
			if (target.tagName == 'ARTICLE') break;
			target = target.parentNode;
		}
		if (target == this) return;

		currentElem = target;
		var elem = template.cloneNode('true');
		target.appendChild(elem);

		window.cart.buttonBuyClickHandler();
		window.cart.buttonMarkClickHandler();
	};

	catalog.onmouseout = function (event) {
		// если курсор и так снаружи - игнорируем это событие
		if (!currentElem) return;
		// произошёл уход с элемента - проверим, куда, может быть на потомка?
		var relatedTarget = event.relatedTarget;
		if (relatedTarget) { // может быть relatedTarget = null
			while (relatedTarget) {
				// идём по цепочке родителей и проверяем,
				// если переход внутрь currentElem - игнорируем это событие
				if (relatedTarget == currentElem) return;
				relatedTarget = relatedTarget.parentNode;
			}
		}
		// произошло событие mouseout, курсор ушёл
		currentElem = null;
	};
})();
