const modals = document.querySelectorAll('.modal');
modals.item(0).classList.add("modal_active");
// целесообразно ли здесь записывать переменную modal1 = modals.item(0) отдельно??? Или можно сразу по номеру элемента modals.item(0).classList.add("modal_active");???

const closes = document.querySelectorAll('.modal__close_times');
const closePopup1 = elem => elem.classList.remove("modal_active");

closes.item(0).onclick = function() {
    closePopup1(modals.item(0));
}
// не поняла, почему у onclick обработчик события должен быть не стрелочной функцией.
// почему не сработало close[0].onclick = closePopup1(modals[0]);? Сработало только через доп.функцию.

const buttons = document.querySelectorAll('.btn');

buttons.item(0).onclick = function() {
    closePopup1(modals.item(0));
    modals.item(1).classList.add("modal_active");
}

const closePopup2 = elem => elem.classList.remove("modal_active");

closes.item(1).onclick =function() {
    closePopup2(modals.item(1));
} 
buttons.item(1).onclick = function() {
    closePopup2(modals.item(1));
} 