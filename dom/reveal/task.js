const revealBlockList = Array.from(document.querySelectorAll('.reveal'));

function showBlock(elem) {
    if (elem.getBoundingClientRect().bottom < window.innerHeight && elem.getBoundingClientRect().bottom > 0) {
        elem.classList.add('reveal_active');
    }

    if (elem.getBoundingClientRect().bottom < 0 || elem.getBoundingClientRect().top > window.innerHeight) {
        elem.classList.remove('reveal_active');
    }
} 

revealBlockList.forEach(item => {
    document.addEventListener('scroll', function() {
        showBlock(item);
    });
});