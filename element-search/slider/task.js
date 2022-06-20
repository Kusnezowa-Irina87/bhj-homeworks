// Задача 1

/* const listSlider = Array.from(document.querySelectorAll('div.slider__arrow'));
const listImage = Array.from(document.querySelectorAll('div.slider__item'));

s
function registerСlick(item) {
    item.onclick = function() {
        let activeIndex = listImage.findIndex(item => {
            return item.className.includes('slider__item_active');
        });

        listImage[activeIndex].classList.remove('slider__item_active');

        if (item.className.includes('slider__arrow_prev')) {
            if (activeIndex === 0) {
                activeIndex = listImage.length - 1;
            } else {
                activeIndex--;
            }
        } else if (item.className.includes('slider__arrow_next')) {
            if (activeIndex === listImage.length - 1) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }
        }
        listImage[activeIndex].classList.add('slider__item_active');
    }
}

listSlider.forEach(item => registerСlick(item)); */

// Задача 2

/* const listSlider = Array.from(document.querySelectorAll('div.slider__arrow'));
const listImage = Array.from(document.querySelectorAll('div.slider__item'));
const listSliderDot = Array.from(document.querySelectorAll('div.slider__dot'));
let activeIndex = 0;
listSliderDot[activeIndex].classList.add('slider__dot_active');

function clickImg(item) {
    item.onclick = function() {
        activeIndex = listImage.findIndex(item => {
            return item.className.includes('slider__item_active');
        });
        
        listSliderDot[activeIndex].classList.remove('slider__dot_active');
        listImage[activeIndex].classList.remove('slider__item_active');

        if (item.className.includes('slider__arrow_prev')) {
            if (activeIndex === 0) {
                activeIndex = listImage.length - 1;
            } else {
                activeIndex--;
            }
        } else if (item.className.includes('slider__arrow_next')) {
            if (activeIndex === listImage.length - 1) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }
        }

        listImage[activeIndex].classList.add('slider__item_active');
        listSliderDot[activeIndex].classList.add('slider__dot_active');
    }
}

function clickSlider(item) {
    item.onclick = function() {
        listSliderDot[activeIndex].classList.remove('slider__dot_active');
        listImage[activeIndex].classList.remove('slider__item_active');

        item.classList.add('slider__dot_active');

        activeIndex = listSliderDot.findIndex(item => {
            return item.className.includes('slider__dot_active');
        });

        listImage[activeIndex].classList.add('slider__item_active');
    }
}

listSlider.forEach(item => clickImg(item));
listSliderDot.forEach(item => clickSlider(item)); */

// Вариант преподавателя

const listImage = Array.from(document.querySelectorAll('div.slider__item'));
const listSliderDot = Array.from(document.querySelectorAll('div.slider__dot'));
listSliderDot[0].classList.add('slider__dot_active');

function changeSlide(index) {
    let activeSlide = listImage.findIndex(item => item.className.includes('slider__item_active'));
    listImage[activeSlide].classList.remove('slider__item_active');
    listSliderDot[activeSlide].classList.remove('slider__dot_active');

    let newSlide = index;
    if (newSlide < 0) {
        newSlide = listImage.length - 1;
    } else if (newSlide === listImage.length) {
        newSlide = 0;
    }

    listImage[newSlide].classList.add('slider__item_active');
    listSliderDot[newSlide].classList.add('slider__dot_active');
}

listSliderDot.forEach(item => {
    let i = listSliderDot.indexOf(item);
    item.onclick = function() {
        changeSlide(i);
    }
});
// правильно понимаю, что если сразу назначить функцию item.onclick = changeSlide(i);,то это ошибка, так как функция сразу вызывается, а не по клику? Поэтому нужно дополнительную функцию?

/* for (let i = 0; i < listSliderDot.length; i++) {
    listSliderDot[i].onclick = function() {
        aaa(i);
    }
} */
// Как лучше, через цикл или через forEach назначать событие клика?

const listSlider = Array.from(document.querySelectorAll('div.slider__arrow'));
// объявлять const лучше перед использованием или вначале кода? И что сначала - все константы, а потом функции, или сначала функции?
listSlider.forEach(item => {
    item.onclick = function() {
        let activeIndex = listSliderDot.findIndex(item => {
            return item.className.includes('slider__dot_active');
        });

        if (item.className.includes('slider__arrow_prev')) {
            activeIndex--;
        } else {
            activeIndex++;
        }
        changeSlide(activeIndex);
    }
});