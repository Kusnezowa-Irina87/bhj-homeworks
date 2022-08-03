// Задача 1

/* const spanList = Array.from(document.querySelectorAll('.rotator__case'));

function changeSpan() {
    let activeSpan = spanList.findIndex(item => item.classList.contains('rotator__case_active'));
    spanList[activeSpan].classList.remove('rotator__case_active');

    if (activeSpan === spanList.length - 1) {
        activeSpan = 0;
    } else {
        activeSpan++;
    }

    activeSpan = (activeSpan + 1) % spanList.length;

    spanList[activeSpan].classList.add('rotator__case_active');
    spanList[activeSpan].style.color = spanList[activeSpan].getAttribute('data-color');
}

setInterval(changeSpan, 1000); */

// Задача 2

const spanList = Array.from(document.querySelectorAll('.rotator__case'));
let activeSpan = spanList.findIndex(item => item.classList.contains('rotator__case_active'));

let speed = spanList[activeSpan].getAttribute('data-speed');

let timerId = setTimeout(function changeSpan() {
    activeSpan = spanList.findIndex(item => item.classList.contains('rotator__case_active'));
    spanList[activeSpan].classList.remove('rotator__case_active');

    activeSpan = (activeSpan + 1) % spanList.length;

    spanList[activeSpan].classList.add('rotator__case_active');
    spanList[activeSpan].style.color = spanList[activeSpan].getAttribute('data-color');
    speed = spanList[activeSpan].getAttribute('data-speed');
    timerId = setTimeout(changeSpan, speed);
}, speed);
