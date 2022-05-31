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

let start = 0;

imageCookie.onclick = function() {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;

    if (start === 0) {
        start = Date.now();
    } else {
       let end = Date.now();
       let elapsed = (end - start)/1000;
       console.log(elapsed);
       clickRate.textContent = (1/(clickerCounter.textContent/elapsed)).toFixed(2);
    }

    if (imageCookie.width === 200) {
        imageCookie.width = 150;
    } else {
        imageCookie.width = 200;
    }
}