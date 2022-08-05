const paretnFont = document.querySelector("div.book__control_font-size");
const fontSizeList = Array.from(paretnFont.querySelectorAll('a.font-size'));

function changeElem(obj, parent, classActive, parentClass, arrClass, dataAttr, arrValueAttr) {
    let activeElem = parent.querySelector('.' + classActive);
    if (activeElem) {
        activeElem.classList.remove(classActive);
    }

    obj.classList.add(classActive);

    const textBlock = obj.closest('.book');

    if (textBlock.className.includes(parentClass)) {
        textBlock.classList.remove(arrClass[0]);
        textBlock.classList.remove(arrClass[1]);
        textBlock.classList.remove(arrClass[2]);
    }
    
    if (obj.getAttribute(dataAttr) === arrValueAttr[0]) {
        textBlock.classList.add(arrClass[0]);
    }
    if (obj.getAttribute(dataAttr) === arrValueAttr[1]) {
        textBlock.classList.add(arrClass[1]);
    }
    if (obj.getAttribute(dataAttr) === arrValueAttr[2]) {
        textBlock.classList.add(arrClass[2]);
    }
}

function changeFontSize(elem) {
    elem.addEventListener('click', function(event) {
        let parent = paretnFont;
        let classActive = 'font-size_active';
        let parentClass = 'book_fs';
        let arrClass = ['book_fs-big', 'book_fs-small', ''];
        let dataAttr = 'data-size';
        arrValueAttr = ['big', 'small', ''];
        let obj = this;

        changeElem(obj, parent, classActive, parentClass, arrClass, dataAttr, arrValueAttr);

        event.preventDefault();
    });
}

fontSizeList.forEach(changeFontSize);

const parentColor = document.querySelector("div.book__control_color");
const colorElemList = Array.from(parentColor.querySelectorAll('a.color'));

function changeColor(elem) {
    elem.addEventListener('click', function(event) {
        let parent = parentColor;
        let classActive = 'color_active';
        let parentClass = 'book_color';
        let arrClass = ['book_color-gray', 'book_color-whitesmoke', 'book_color-black'];
        let dataAttr = 'data-text-color';
        arrValueAttr = ['gray', 'whitesmoke', 'black'];
        let obj = this;

        changeElem(obj, parent, classActive, parentClass, arrClass, dataAttr, arrValueAttr);

        event.preventDefault();
    });
}

colorElemList.forEach(changeColor);

const parentBackground = document.querySelector("div.book__control_background");
const backgroundList = Array.from(parentBackground.querySelectorAll('a.color'));


function changeBackground(elem) {
    elem.addEventListener('click', function(event) {
        let parent = parentBackground;
        let classActive = 'color_active';
        let parentClass = 'book_bg';
        let arrClass = ['book_bg-gray', 'book_bg-black', 'book_bg-white'];
        let dataAttr = 'data-bg-color';
        arrValueAttr = ['gray', 'black', 'white'];
        let obj = this;

        changeElem(obj, parent, classActive, parentClass, arrClass, dataAttr, arrValueAttr);

        event.preventDefault();
    });
}

backgroundList.forEach(changeBackground);