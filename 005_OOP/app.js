/**
 *
 * ES5 (old)
 *
 */
const app = document.querySelector('.app');

function Button(text, color) {
  this.text = text;
  this.color = color;
  // this.renderBtn = function () {
  //   console.log(this);
  // };
}

Button.prototype.renderBtn = function () {
  const el = document.querySelector(`.btn-${this.text}`);
  if (el) el.remove();
  const btn = document.createElement('button');
  btn.textContent = this.text;
  btn.style.backgroundColor = this.color;
  btn.classList.add(`btn-${this.text}`);
  app.append(btn);
  return btn;
};

Button.prototype.setColor = function (color) {
  this.color = color;
  this.renderBtn();
};

const btnPrimary = new Button('Primary', 'blue');
const btnYes = new Button('Yes', 'green');

btnPrimary.renderBtn();
btnYes.renderBtn();

setTimeout(() => {
  btnYes.setColor('red');
}, 2000);

/**
 * Наседование, Прототипное наследование
 */

function BtnTerminator(text, color, status) {
  // Button.apply(this, arguments);
  Button.call(this, text, color);
  this.status = status;
  this.kill = function () {
    app.remove();
  };
}

BtnTerminator.prototype = Object.create(Button.prototype);
BtnTerminator.prototype.constructor = BtnTerminator;

BtnTerminator.prototype.getStatus = function () {
  console.log(this.status.toUpperCase());
};

const terminator = new BtnTerminator('Terminator', 'orange', 'ciller');
terminator.renderBtn();
const killer = document.querySelector('.btn-Terminator');
killer.addEventListener('click', () => {
  terminator.getStatus();
  terminator.kill();
});

/**
 *
 * ES6
 *
 */
const methodName = 'newMethodName';

class ButtonES {
  constructor(title, color, parent) {
    this.title = title;
    this.color = color;
    this._parent = parent;
  }
  render() {
    const el = document.querySelector(`.btn-${this.title}`);
    if (el) el.remove();
    const btn = document.createElement('button');
    btn.textContent = this.title;
    btn.style.backgroundColor = this.color;
    btn.classList.add(`btn-${this.title}`);
    this._parent.append(btn);
  }
  static say(num) {
    alert(`BUTTON-${num}`);
  }
  [methodName]() {
    console.log(this);
  }
  get parent() {
    returnthis.parent;
  }
  set parent(newParent) {
    this._parent = newParent;
  }
}

const btnES = new ButtonES('click', 'green', app);
btnES.render();

class Closer extends ButtonES {
  constructor(title, color, parent, status) {
    super(title, color, parent), (this.status = status);
  }
  close() {
    this._parent.remove();
  }
}

const btnClose = new Closer('X', 'yellow', app, 'open');
btnClose.render();
document.querySelector('.btn-X').addEventListener('click', () => {
  btnClose.close();
});
