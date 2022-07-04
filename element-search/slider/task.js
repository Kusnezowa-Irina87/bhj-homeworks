// подсказки преподавателя
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

const listSlider = Array.from(document.querySelectorAll('div.slider__arrow'));

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