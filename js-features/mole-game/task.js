const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);

function showMessage (text) {
    alert(text);
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}

for (let index = 1; index < 10; index++) {
    let hole = getHole(index);

    hole.onclick = function() {

        //if (hole.className === 'hole hole_has-mole') {
        if (hole.classList.contains( 'hole_has-mole' )) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
            
            if (Number(deadCounter.textContent) > 9) {
                showMessage('Поздравляем с победой!');
            }
        } else {
            lostCounter.textContent = Number(lostCounter.textContent) + 1;

            if (Number(lostCounter.textContent) > 4) {
                showMessage('Увы, проигрыш. Попробуйте еще!');
            }
        }
    }
}