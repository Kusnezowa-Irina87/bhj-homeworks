const chatWidgetSide = document.querySelector('.chat-widget__side');
const messages = document.querySelector('.chat-widget__messages');
const messagesContainer = document.querySelector('.chat-widget__messages-container');
const input = document.getElementById("chat-widget__input");
const chatWidget = chatWidgetSide.closest('.chat-widget');
let timer = 30;
let intervalId;

function addTimer() {
  if (chatWidget.classList.contains('chat-widget_active')) {
    if (timer === 0) {
      timer = 30;
      addRobotQuestion();
    } else {
      timer--;
    }
  }
}

chatWidgetSide.onclick = function() {
  chatWidget.classList.add('chat-widget_active');
  intervalId = setInterval(addTimer, 1000); 
}

/* document.onclick = function() {
    const chatWidget = this.closest('.chat-widget');
    chatWidget.classList.remove('chat-widget_active');
} */
// как сделать так, чтобы чат chat-widget__area закрывался?

function getQuestion() {
  const words = [
      'Привет! Ты что-то хотел?',
      'Ну напиши уже что-нибудь',
      'Спрашивать будем?',
      'Ауу?',
      'Может уже напишешь?',
      'Если вопросов нет, то я домой',
    ],
    index = Math.floor(Math.random() * words.length);
  return words[index];
}

function getWord() {
  const words = [
      'Привет! Мы спим еще.',
      'Зачем ты пишешь мне?',
      'Отстань!',
      'Ты кто?',
      'Я домой хочу, а ты пишешь',
      'Что тебе надо?',
      'Ау?',
      'Где ваша совесть?',
      'Разговарию только от 100 покупок',
    ],
    index = Math.floor(Math.random() * words.length);

  return words[index];
}
// getWord взяла из ДЗ keysolo

function addRobotQuestion() {
  let time = new Date();
  let timeStr = time.toLocaleTimeString();
  timeStr = timeStr.substring(0, 5);

  let textRobot = getQuestion();
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">` + timeStr + `</div>
      <div class="message__text">` + textRobot + `</div>
    </div>
  `;

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addRobotMessage() {
  let time = new Date();
  let timeStr = time.toLocaleTimeString();
  timeStr = timeStr.substring(0, 5);

  let textRobot = getWord();
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">` + timeStr + `</div>
      <div class="message__text">` + textRobot + `</div>
    </div>
  `;

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addClientMessage(obj) {
  let text = obj.value;
  let time = new Date();
  let timeStr = time.toLocaleTimeString();
  timeStr = timeStr.substring(0, 5);

  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">` + timeStr + `</div>
      <div class="message__text">` + text + `</div>
    </div>
  `;

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

input.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    clearInterval(intervalId);
    timer = 30;
    if (this.value !== "") {
      addClientMessage(this);
      this.value = "";
      addRobotMessage();

      intervalId = setInterval(addTimer, 1000);
    }
  }
});