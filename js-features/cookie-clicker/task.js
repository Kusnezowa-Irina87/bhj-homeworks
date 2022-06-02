// Задача №2
/* 
const imageCookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

imageCookie.onclick = function() {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    if (imageCookie.width === 200) {
        imageCookie.width = 150;
    } else {
        imageCookie.width = 200;
    }
}
 */
// Задача 2.2

const imageCookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickRate = document.getElementById("click__rate");

let start = Date.now();

imageCookie.onclick = function() {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    // console.log("клики " + clickerCounter.textContent)

    let end = Date.now();
    let elapsed = (end - start)/1000;
    // console.log("секунды " + elapsed);
    clickRate.textContent = (clickerCounter.textContent/elapsed).toFixed(2);
    // console.log("кликов в сек " + clickRate.textContent);

    if (imageCookie.width === 200) {
        imageCookie.width = 150;
    } else {
        imageCookie.width = 200;
    }
}