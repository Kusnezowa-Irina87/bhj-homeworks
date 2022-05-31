// Задача 1

/* 
const timer = document.getElementById("timer");

function addTimer () {
    timer.textContent -= 1;
    if (Number(timer.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(addTimer, 1000);  
*/


// Задача 1.2

/* 
const card = document.getElementById("card");
card["width"] = 410;
// есть пролема с элементом card, начиная с 00:00:09 начинает прыгать строчка, видимо, из-за недостаточности ширины элемента. 
// попыталась изменить ширину на 410px (как это было в презентации) элемента card через js, так как не могу открыть css-файл. Но изменение таким методом не помогло.

const timer = document.getElementById("timer");
timer.textContent = "00:00:" + timer.textContent;

function addTimer () {
    let arr = (timer.textContent).split(':');
    
    if (Number(arr[2]) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
        // каким образом выводить одновременно цифры 00:00:00 и сообщение о выигрыше? На данный момент - сначала время, потом через момент сообщение.
    } else {
        arr[2] -= 1;

        if (Number(arr[2]) < 10) {
          arr[2] = '0' + arr[2];
        }

        timer.textContent = arr.join(':');
    }
}

let intervalId = setInterval(addTimer, 1000); 
*/

// Задача 1.2 вариант 1

/* 
const timer = document.getElementById("timer");
timer.textContent = "00:00:" + timer.textContent;

function addTimer () {
    let arr = (timer.textContent).split(':');
    
    if (Number(arr[2]) === 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
        location = "C:\Users\Shadow\Desktop\Поздравляем.txt";
        // не очень поняла, как запустить загрузку файла
    } else {
        arr[2] -= 1;

        if (Number(arr[2]) < 10) {
          arr[2] = '0' + arr[2];
        }

        timer.textContent = arr.join(':');
    }
}

let intervalId = setInterval(addTimer, 1000);  
*/

// вариант 2

const timer = document.getElementById("timer");
timer.textContent = "00:00:" + timer.textContent;

function addTimer () {
    let arr = (timer.textContent).split(':');
    
    if (Number(arr[2]) === 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
        const doc = document.getElementById("document");
        doc.click();
        // верно ли? у меня в хроме возникло всплывающее окно. У меня они заюлокированы.
    } else {
        arr[2] -= 1;

        if (Number(arr[2]) < 10) {
          arr[2] = '0' + arr[2];
        }

        timer.textContent = arr.join(':');
    }
}

let intervalId = setInterval(addTimer, 1000); 