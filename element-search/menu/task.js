// Вариант 1 ( через nextElementSibling)

/* const listItem = Array.from(document.querySelectorAll('ul.menu_main>li.menu__item>a.menu__link'));

function registerСlick(item) {
    item.onclick = function() {
        let menuItem = item.nextElementSibling;
        if (menuItem) {
            if (menuItem.className.includes('menu_active')) {
                menuItem.classList.remove('menu_active');
            } else {
                menuItem.classList.add('menu_active');
            }

            return false;
        }
    }
}

listItem.forEach(item => registerСlick(item)); */



// Вариант 2

/* const listItem = Array.from(document.querySelectorAll('ul.menu_main>li.menu__item>a.menu__link'));

function registerСlick(item) {
    item.onclick = function() {
        let parent = item.closest('li.menu__item');
        let menuItem = parent.querySelector('.menu_sub');

        if (menuItem) {
            if (menuItem.className.includes('menu_active')) {
                menuItem.classList.remove('menu_active');
            } else {
                menuItem.classList.add('menu_active');
            }

            return false;
        }
    }
}

listItem.forEach(item => registerСlick(item)); */

// Сложный уровень

const listItem = Array.from(document.querySelectorAll('ul.menu_main>li.menu__item>a.menu__link'));
console.log('массив ' + listItem);

function registerСlick(item) {
    item.onclick = function() {
        let closeMenu = item.nextElementSibling;
        // у нажатого элемента ищем соседнее меню 
        listItem.forEach(elem => {
        // через цикл проверяем список ссылок
            if (elem === item) {
                alert('Сейчас работаем с нажатым элементом');
            // если нажатый элемент равен проверяемому, то
                if (closeMenu) {
                // если у нажатого элемента есть соседнее меню
                    if (closeMenu.className.includes('menu_active')) {
                    // то проверим, если это меню открыто, то закрыть
                        closeMenu.classList.remove('menu_active');
                    } else {
                    // иначе открыть нажатое меню
                        closeMenu.classList.add('menu_active');
                    }
                    // в любом случае запретить переход по ссылке
                }
                return false;
            } else {
            // если нажатый элемент НЕ равен проверяемому, то ищем у проверяемого соседнее меню
                alert('Сейчас работаем с НЕнажатым элементом');
                let elemSibling = elem.nextElementSibling;
                // если меню есть, то закрыть его
                if (elemSibling) {
                    if (elemSibling.className.includes('menu_active')) {
                        elemSibling.classList.remove('menu_active');
                    }
                }
            }
        });
    }
}

listItem.forEach(item => registerСlick(item));