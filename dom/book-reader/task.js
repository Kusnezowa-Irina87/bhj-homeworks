const fontSizeList = Array.from(document.querySelectorAll('a.font-size'));

// Вариант решения 1

/* function changeFontSize(elem) {
    elem.onclick = function() {
        if (!this.classList.contains('font-size_active')) {
            let activeElem = document.querySelector('.font-size_active');
            activeElem.classList.remove('font-size_active');

            this.classList.add('font-size_active');  
        }

        const textBlock = this.closest('.book');

        if (textBlock.className !== 'book') {
            textBlock.classList.remove('book_fs-big');
            textBlock.classList.remove('book_fs-small');
        }
        
        if (this.getAttribute('data-size') === 'small') {
            textBlock.classList.add('book_fs-small');
        }

        if (this.getAttribute('data-size') === 'big') {
            textBlock.classList.add('book_fs-big');
        }

        return false;
    }
} */

// Вариант решения 2

/* function changeFontSize(elem) {
    elem.onclick = function() {
        let activeElem = document.querySelector('.font-size_active');
    
        if (activeElem) {
            activeElem.classList.remove('font-size_active');
        }

        this.classList.add('font-size_active');

        const textBlock = this.closest('.book');

        if (textBlock.className.includes('book_fs')) {
            textBlock.classList.remove('book_fs-big');
            textBlock.classList.remove('book_fs-small');
        }
        
        if (this.getAttribute('data-size') === 'small') {
            textBlock.classList.add('book_fs-small');
        }

        if (this.getAttribute('data-size') === 'big') {
            textBlock.classList.add('book_fs-big');
        }

        return false;
    }
} */

// Вариант решения 3 с addEventListener

function changeFontSize(elem) {
    elem.addEventListener('click', function() {
        let activeElem = document.querySelector('.font-size_active');
    
        if (activeElem) {
            activeElem.classList.remove('font-size_active');
        }

        elem.classList.add('font-size_active');

        const textBlock = this.closest('.book');

        if (textBlock.className !== "book") {
            textBlock.classList.remove('book_fs-big');
            textBlock.classList.remove('book_fs-small');
        }
        
        if (this.getAttribute("data-size") === "small") {
            textBlock.classList.add('book_fs-small');
        }

        if (this.getAttribute("data-size") === "big") {
            textBlock.classList.add('book_fs-big');
        }

        elem.preventDefault();
        //не работает с preventDefault(), идет перезагрузка страницы
    });
}

fontSizeList.forEach(changeFontSize);

const paretnColor = document.querySelector("div.book__control_color");
const colorElemList = Array.from(paretnColor.querySelectorAll('a.color'));

function changeColor(elem) {
    elem.onclick = function() {
        let activeElem = paretnColor.querySelector('.color_active');
        if (activeElem) {
            activeElem.classList.remove('color_active');
        }

        this.classList.add('color_active');

        const textBlock = this.closest('.book');

        if (textBlock.className.includes('book_color')) {
            textBlock.classList.remove('book_color-gray');
            textBlock.classList.remove('book_color-whitesmoke');
            textBlock.classList.remove('book_color-black');
        }
        
        if (this.getAttribute('data-text-color') === 'black') {
            textBlock.classList.add('book_color-black');
        }

        if (this.getAttribute('data-text-color') === 'gray') {
            textBlock.classList.add('book_color-gray');
        }

        if (this.getAttribute('data-text-color') === 'whitesmoke') {
            textBlock.classList.add('book_color-whitesmoke');
        }

        return false;
    }
}

colorElemList.forEach(changeColor);

const paretnBackground = document.querySelector("div.book__control_background");
const backgroundList = Array.from(paretnBackground.querySelectorAll('a.color'));

function changeBackground(elem) {
    elem.onclick = function() {
        let activeElem = paretnBackground.querySelector('.color_active');
        if (activeElem) {
            activeElem.classList.remove('color_active');
        }

        this.classList.add('color_active');

        const textBlock = this.closest('.book');

        if (textBlock.className.includes('book_bg')) {
            textBlock.classList.remove('book_bg-gray');
            textBlock.classList.remove('book_bg-black');
            textBlock.classList.remove('book_bg-white');
        }
        
        if (this.getAttribute('data-bg-color') === 'black') {
            textBlock.classList.add('book_bg-black');
        }

        if (this.getAttribute('data-bg-color') === 'gray') {
            textBlock.classList.add('book_bg-gray');
        }

        if (this.getAttribute('data-bg-color') === 'white') {
            textBlock.classList.add('book_bg-white');
        }

        return false;  
    }
}

backgroundList.forEach(changeBackground);