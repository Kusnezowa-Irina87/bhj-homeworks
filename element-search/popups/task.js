const firstMenu = document.getElementById('modal_main');
firstMenu.classList.add("modal_active");

const closes = Array.from(document.querySelectorAll('.modal__close_times'));
const buttons = Array.from(document.querySelectorAll('.btn'));

function close(item) {
    let parent = item.closest('.modal');
    parent.classList.remove("modal_active");
}

function closePopup(item) {
    item.onclick = function() {
        close(this);
        if (this.className.includes('show-success')) {
            let nexPopup = document.getElementById('modal_success');
            nexPopup.classList.add("modal_active");
        }
    }
}

closes.forEach(closePopup);
//closes.forEach(item => closePopup(item)); внутри функции выполняется подписка
buttons.forEach(closePopup);