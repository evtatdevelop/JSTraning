'use strict';

console.log('forms 🀄');

// const app = document.querySelector('.app');

/**
 * SELECT BASE
 */
// const select = document.createElement('select');
// select.setAttribute('id', 'geners');
// document.querySelector('.app').append(select);
// const items = [
//   {
//     value: 'rock',
//     text: 'Rock',
//   },
//   {
//     value: 'blues',
//     text: 'Blues',
//   },
// ];
// items.forEach((item) => {
//   select.append(new Option(item.text, item.value));
// });

// console.log(Array.from(geners.options).filter((option) => option.selected).map((option) => option.value)[0]);
// console.log(geners.options[geners.selectedIndex].value);
// console.log(geners.value);

// select.append(new Option('Classic', 'classic', true, true));
// const newOption = new Option('Jazz', 'jazz');
// select.append(newOption);

// newOption.selected = true;

/**
 *  EDITABLE DIV (TEXTAREA)
 */
// const div = document.createElement('div');
// div.classList.add('div-content');
// const textarea = document.createElement('textarea');
// textarea.classList.add('text-edit', 'hide');
// app.append(div, textarea);

// div.addEventListener('click', () => {
//   div.classList.add('hide');
//   textarea.classList.remove('hide');
//   textarea.focus();
// });

// textarea.addEventListener('blur', () => {
//   div.classList.remove('hide');
//   textarea.classList.add('hide');
//   div.innerHTML = textarea.value;
// });
// textarea.onkeydown = function (e) {
//   if (e.key == 'Enter') {
//     this.blur();
//   }
// };

/**
 *  EDIT TABLE
 */
// const table = document.querySelector('.table');
// table.addEventListener('click', (e) => {
//   const aimTd = e.target.closest('.table td');
//   if (!aimTd) return;
//   if (table.querySelector('.editor')) return;
//   const content = aimTd.innerHTML;

//   const editor = document.createElement('textarea');
//   editor.classList.add('editor');
//   editor.value = content;
//   aimTd.innerHTML = '';
//   aimTd.append(editor);
//   editor.focus();

//   const btnBox = document.createElement('dib');
//   const btnOk = document.createElement('button');
//   const btnCancel = document.createElement('button');
//   btnOk.textContent = 'Ok';
//   btnCancel.textContent = 'Cancel';
//   btnBox.append(btnOk, btnCancel);
//   btnBox.style.position = 'absolute';
//   document.body.append(btnBox);
//   btnBox.style.left = `${aimTd.getBoundingClientRect().x}px`;
//   btnBox.style.top = `${aimTd.getBoundingClientRect().bottom}px`;

//   btnCancel.addEventListener('click', () => {
//     aimTd.innerHTML = content;
//     btnBox.remove();
//   });

//   btnOk.addEventListener('click', () => {
//     aimTd.innerHTML = editor.value;
//     btnBox.remove();
//   });
// });

/**
 *  KEY-DOWN MOVING
 */
// mouse.addEventListener('click', () => {
//   mouse.setAttribute('tabindex', '1');
//   mouse.style.position = 'fixed';
// });
// document.addEventListener('keydown', (e) => {
//   switch (e.code) {
//     case 'ArrowLeft':
//       mouse.style.left = `${mouse.getBoundingClientRect().x - 10}px`;
//       return false;
//     case 'ArrowRight':
//       mouse.style.left = `${mouse.getBoundingClientRect().x + 10}px`;
//       return false;
//     case 'ArrowUp':
//       console.log(mouse.getBoundingClientRect().y);
//       mouse.style.top = `${mouse.getBoundingClientRect().y - 23}px`;
//       return false;
//     case 'ArrowDown':
//       console.log(mouse.getBoundingClientRect().y);
//       mouse.style.top = `${mouse.getBoundingClientRect().y - 3}px`;
//       return false;
//     default:
//       return false;
//   }
// });

/**
 * DEPOSIT CALC
 */
// const ask = document.querySelector('#ask');
// const term = document.querySelector('#term');
// const interest = document.querySelector('#interest');

// function getAfterNum() {
//   return Math.round(ask.value * (1 + (interest.value / 100) * (term.value / 12)));
// }

// function getAfterHeight(afterNum) {
//   return (afterNum * document.querySelector('.show .before .gista').offsetHeight) / ask.value;
// }

// function renderShow() {
//   document.querySelector('.show .before .numbers').textContent = ask.value;
//   const afterNum = getAfterNum();
//   document.querySelector('.show .after .numbers').textContent = afterNum;
//   document.querySelector('.show .after .gista').style.height = `${getAfterHeight(afterNum)}px`;
// }

// ask.oninput = renderShow;
// interest.oninput = renderShow;
// term.onchange = renderShow;
// renderShow();
