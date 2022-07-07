const tabList = Array.from(document.querySelectorAll('div.tab'));
const tabContentList = Array.from(document.querySelectorAll('div.tab__content'));

function changeTab(item) {
    let activeIndex = tabList.findIndex(item => item.className.includes('tab_active'));
    tabList[activeIndex].classList.remove('tab_active');
    tabContentList[activeIndex].classList.remove('tab__content_active');
    item.classList.add('tab_active');
    let itemIndex = tabList.indexOf(item);
    tabContentList[itemIndex].classList.add('tab__content_active');
}

tabList.forEach(item => {
    item.onclick = function() {
        changeTab(item);
    }
});