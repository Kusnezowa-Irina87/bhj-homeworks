const spanList = Array.from(document.querySelectorAll('.rotator__case'));
let speed = 1000;

function changeSpan() {
    let activeSpan = spanList.findIndex(item => item.classList.contains('rotator__case_active'));
    spanList[activeSpan].classList.remove('rotator__case_active');

    if (activeSpan === spanList.length - 1) {
        activeSpan = 0;
    } else {
        activeSpan++;
    }

    spanList[activeSpan].classList.add('rotator__case_active');
    spanList[activeSpan].style.color = spanList[activeSpan].getAttribute('data-color');
    return spanList[activeSpan].getAttribute('data-speed');
}

setInterval(() => speed = Number(changeSpan()), speed);

// не поняла, как переписать значение speed из функции changeSpan в значение милисекунд setInterval