class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  addTimer() {
    let arr = (timer.textContent).split(':');
    
    if (Number(arr[2]) === 0) {
      this.clearInterval();
      if (this.currentSymbol === null) {
        alert('всё введено');
        this.success();
      } else {
        this.clearInterval();
        alert('Не успели ввести слово');
        //в этом месте alert постоянно повторяется
        this.fail();
      }
    } else {
      arr[2] -= 1;

      if (Number(arr[2]) < 10) {
        arr[2] = '0' + arr[2];
      }

      timer.textContent = arr.join(':');
    }
  }

  setInterval() {
    let intervalId = setInterval(this.addTimer, 1000);
    return intervalId;
  }

  clearInterval() {
    clearInterval(this.setInterval());
  }

  registerEvents() {
    const timer = document.getElementById("timer");
    let numberSymbols = document.querySelectorAll('span.symbol').length;
    if (numberSymbols > 9) {
      timer.textContent = "00:00:" + numberSymbols;
    } else {
      timer.textContent = "00:00:0" + numberSymbols;
    }

    this.setInterval();

    document.onkeydown = (e) => {
      let symbol = this.currentSymbol.textContent.toUpperCase();
      let key = String.fromCharCode(e.keyCode);

      if (symbol === key) {
        this.currentSymbol.classList.remove('symbol_current');
        this.success();
        this.currentSymbol.classList.add('symbol_current');
        this.setInterval();
      } else {
        this.clearInterval();
        this.fail();
        this.setInterval();
      }
    }
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      this.clearInterval();
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    this.setInterval();
  }
}

new Game(document.getElementById('game'))