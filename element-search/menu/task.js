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

        listItem.forEach(elem => {
            if (elem === item) {
                if (closeMenu) {
                    if (closeMenu.className.includes('menu_active')) {
                        closeMenu.classList.remove('menu_active');
                    } else {
                        closeMenu.classList.add('menu_active');
                    }
                    return false;
                }
            } else {
                let elemSibling = elem.nextElementSibling;
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