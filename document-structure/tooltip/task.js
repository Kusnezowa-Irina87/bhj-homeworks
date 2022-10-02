const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

/* function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;

    let top = box.top + scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;

    return {
      top: top,
      left: left
    };
} */
// функция getCoords взята из учебных материалов, также не помогает отпозиционировать правильно подсказку

function createNote(elem) {
    const div = document.createElement('div');
    elem.appendChild(div);
    div.setAttribute('class', 'tooltip');
    div.textContent = elem.getAttribute('title');
    div.style.cssText = 'position: absolute';
    // let coords = getCoords(elem);
    // для применения функции getCoords
    let coords = elem.getBoundingClientRect();
    console.log('Координаты якоря ');
    console.log(coords);
    div.style.left = coords.left + "px";
    div.style.top = coords.bottom + "px";
    // почему-то не получается отредактивровать положение подсказки относительно элемента-якоря - неправильное позиционирование, особенно заметно с третьей подсказки и ниже
}

function showNote(elem) {
    elem.addEventListener('click', function(event) {
        let child = elem.querySelector('.tooltip');
        let activeElement = document.querySelector('.tooltip_active');
        if (activeElement) {
            activeElement.classList.remove('tooltip_active');
        }

        if (activeElement !== child) {
            child.classList.add('tooltip_active');
        }

        event.preventDefault();
    });
}

tooltips.forEach(createNote);
tooltips.forEach(showNote);

// 1. как выравнять положение подсказки ровно относительно левого края ссылки?
// 2. как сделать, чтобы клик по свободному полю приводил к скрытию подсказки?

// 3. ### Повышенный уровень сложности #2 (не обязательно)
// Добавьте подсказке дополнительный атрибут data-position для настройки места появления подсказки:
// не очень понимаю, как это использовать?