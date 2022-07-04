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

activeMenuList.forEach(linkSearch);