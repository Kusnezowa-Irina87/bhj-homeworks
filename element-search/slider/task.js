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

const listSlider = Array.from(document.querySelectorAll('div.slider__arrow'));
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
listSliderDot.forEach(item => clickSlider(item));