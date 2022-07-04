const dropdownBtnList = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

function closeDropdown(elem) {
    elem.classList.remove('dropdown__list_active');
}

function openList(item) {
    let parent = item.closest('div.dropdown');
    let dropdownList = parent.querySelector('ul.dropdown__list');

    item.onclick = function() {
        let activDropdown = document.querySelector('.dropdown__list_active');

        if (activDropdown) {
            closeDropdown(activDropdown);
        }

        if (activDropdown !== dropdownList) {
            dropdownList.classList.add('dropdown__list_active');
        }
    
        return false;
    }
}


function changeText(item) {
    item.onclick = function() {
        let link = this.querySelector('.dropdown__link');
        let text = link.textContent;
        let parent = item.closest('.dropdown');
        let closeDropdownValue = parent.querySelector('.dropdown__value');
        closeDropdownValue.textContent = text;
        
        let drodropdownList = this.closest('.dropdown__list');

        closeDropdown(drodropdownList);

        return false;
    }
}

dropdownBtnList.forEach(openList);
dropdownItems.forEach(changeText);