const inputText = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

function addElement(text) {
    tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">` + text + `</div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;

    let childs = Array.from(tasksList.querySelectorAll('.task__remove'));

    childs.forEach(item => {
        item.onclick = function() {
            let parent = this.closest('.task');
            parent.remove();
        }; 
    });
}

inputText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      if (this.value !== "") {
        let text = this.value;
        addElement(text);
        this.value = "";
      }
      event.preventDefault();
    }
});

button.addEventListener("click", function(event) {
    if (inputText.value !== "") {
      let text = inputText.value;
      addElement(text);
      inputText.value = "";
    }
    event.preventDefault();
});