// Первая задача

/* const inputList = Array.from(document.querySelectorAll('input.interest__check'));

function aaa(elem) {
    const childInputList = Array.from(elem.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check'));
    
    if (elem.closest('.interests_active')) {
        console.log('Я дочерний');

    } else {
        console.log('Я родительский чекбокс');

        if (elem.checked) {
            childInputList.forEach(child => child.checked = true);
        } else {
            childInputList.forEach(child => child.checked = false);
        }
    }
}

inputList.forEach(input => {
    input.addEventListener('change', function() {
        aaa(input);
    });
}); */

// Повышенная сложность

const inputList = Array.from(document.querySelectorAll('input.interest__check'));

function changeParent(elem) {
    let closestInterestsActive = elem.closest('.interests_active');
    if (closestInterestsActive) {
        let parentInput = closestInterestsActive.closest('.interest').querySelector('.interest__check');
        let childParentInput = Array.from(parentInput.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check'));
        if (childParentInput.every(item => item.checked == true)) {
            parentInput.indeterminate = false;
            parentInput.checked = true;
        } else if (childParentInput.some(item => item.checked == true)) {;
            parentInput.indeterminate = true;
        } else if (childParentInput.some(item => item.indeterminate == true)) {
            parentInput.indeterminate = true;
        } else {
            parentInput.checked = false;
            parentInput.indeterminate = false;
        }
        changeParent(parentInput);
    }
}


function changeCheckboxes(elem) {
    const interestsActive = elem.closest('.interest').querySelector('.interests_active');
    if (interestsActive) {
        const childElemList = Array.from(interestsActive.querySelectorAll('.interest__check'));
        if (elem.checked) {
            childElemList.forEach(child => child.checked = true);
        } else {
            childElemList.forEach(child => child.checked = false);
        }
    }

    changeParent(elem);
}

inputList.forEach(input => {
    input.addEventListener('change', function() {
        changeCheckboxes(input);
    });
});