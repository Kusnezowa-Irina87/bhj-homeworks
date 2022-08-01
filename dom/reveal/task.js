const revealBlockList = Array.from(document.querySelectorAll('.reveal'));

function showBlock(elem) {
    if (elem.getBoundingClientRect().bottom < window.innerHeight) {
        elem.classList.add('reveal_active');
    }
} 

revealBlockList.forEach(item => {
    document.addEventListener('scroll', function() {
        showBlock(item);
    });
});