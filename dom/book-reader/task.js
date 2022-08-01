const fontSizeList = Array.from(document.querySelectorAll('a.font-size'));

// Вариант решения 1

function changeFontSize(elem) {
    elem.onclick = function() {
        if (!this.classList.contains('font-size_active')) {
            let activeElem = document.querySelector('.font-size_active');
            activeElem.classList.remove('font-size_active');

            this.classList.add('font-size_active');  
        }

        let textBlock = this.closest('.book');

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

        return false;  
    }
}

// Вариант решения 2

/* function changeFontSize(elem) {
    elem.onclick = function() {
        let activeElem = document.querySelector('.font-size_active');
    
        if (activeElem) {
            activeElem.classList.remove('font-size_active');
        }

        this.classList.add('font-size_active');

        let textBlock = this.closest('.book');

        if (textBlock.className !== "book") {
            textBlock.classList.remove('book_fs-big');
            textBlock.classList.remove('book_fs-small');
        }
        //следует ли делать проверку на имеющиеся классы, или проще сразу удалять?
        
        if (this.getAttribute("data-size") === "small") {
            textBlock.classList.add('book_fs-small');
        }

        if (this.getAttribute("data-size") === "big") {
            textBlock.classList.add('book_fs-big');
        }

        return false;
    }
} */

// Вариант решения 3 с addEventListener

/* function changeFontSize(elem) {
    elem.addEventListener('click', function() {
        let activeElem = document.querySelector('.font-size_active');
    
        if (activeElem) {
            activeElem.classList.remove('font-size_active');
        }

        elem.classList.add('font-size_active');

        let textBlock = this.closest('.book');

        if (textBlock.className !== "book") {
            textBlock.classList.remove('book_fs-big');
            textBlock.classList.remove('book_fs-small');
        }
        //следует ли делать проверку на имеющиеся классы, или проще сразу удалять?
        
        if (this.getAttribute("data-size") === "small") {
            textBlock.classList.add('book_fs-small');
        }

        if (this.getAttribute("data-size") === "big") {
            textBlock.classList.add('book_fs-big');
        }

        return false;
    });
} */
// Почему в решении 3 не работает код с addEventListener? Только с onclick

fontSizeList.forEach(changeFontSize);

const paretnColor = document.querySelector("div.book__control_color");
const colorElemList = Array.from(document.querySelectorAll('a.color'));

function changeColor(elem) {
    elem.onclick = function() {
        if (!this.classList.contains('color_active')) {
            let activeElem = paretnColor.querySelector('.color_active');
            activeElem.classList.remove('color_active');

            this.classList.add('color_active');
        }

        return false;  
    }
}

colorElemList.forEach(changeColor);

const paretnBackground = document.querySelector("div.book__control_background");
const backgroundList = Array.from(paretnBackground.querySelectorAll('a.color'));

function changeBackground(elem) {
    elem.onclick = function() {
        if (!this.classList.contains('color_active')) {
            let activeElem = paretnBackground.querySelector('.color_active');
            activeElem.classList.remove('color_active');

            this.classList.add('color_active');
        }

        return false;  
    }
}

backgroundList.forEach(changeBackground);