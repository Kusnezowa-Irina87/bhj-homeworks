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

// const listItem = Array.from(document.querySelectorAll('ul.menu_main>li.menu__item>a.menu__link'));

/* function closeElem(elem) {
    if (elem.className.includes('menu_active')) {
        elem.classList.remove('menu_active');
    }
} */
// почему не сработала функция closeElem(elem)?

/* function registerСlick(item) {
    item.onclick = function() {
        let closeMenu = item.nextElementSibling;
        listItem.forEach(elem => {
            if (elem === item) {
                if (closeMenu) {
                    if (closeMenu.className.includes('menu_active')) {
                        closeMenu.classList.remove('menu_active');
                    //closeElem(closeMenu);
                    } else {
                    closeMenu.classList.add('menu_active');
                    }
                }
            } else {
                let elemSibling = elem.nextElementSibling;
                if (elemSibling) {
                    if (elemSibling.className.includes('menu_active')) {
                        elemSibling.classList.remove('menu_active');
                    }
                    //closeElem(elemSibling);
                }
            }
        });

        if (closeMenu) {
            return false;
        }
    }
}

listItem.forEach(item => registerСlick(item)); */

const activeMenuList = Array.from(document.querySelectorAll('ul.menu_sub'));

function linkSearch(item) {
    let parent = item.closest('.menu__item');
    let closeLink = parent.querySelector('.menu__link');

    closeLink.onclick = function() {
        let activeElement = document.querySelector('.menu_active');
        if (activeElement) {
            activeElement.classList.remove('menu_active');
        }

        if (activeElement !== item) {
            item.classList.add('menu_active');
        }

        return false;
    }
}

activeMenuList.forEach(item => linkSearch(item));
// исправила, спасибо. Я не догадалась о такой логике, искать сразу те элементы, с которыми и будем работать.