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

/**
 * MODAL FORM
 */
// const button = document.createElement('button');
// button.textContent = 'Important Button';
// document.body.querySelector('.app').append(button);

// function renderForm(html) {
//   const foggedSheet = document.createElement('div');
//   foggedSheet.setAttribute('id', 'foggedSheet');
//   document.body.style.overflowY = 'hidden';

//   const form = document.createElement('form');
//   form.setAttribute('id', 'importantForm');
//   const input = document.createElement('input');
//   const submit = document.createElement('button');
//   const cancel = document.createElement('button');
//   submit.textContent = 'Ok';
//   cancel.textContent = 'Cancel';
//   const btnBox = document.createElement('div');
//   input.setAttribute('name', 'input');
//   submit.setAttribute('name', 'submit');
//   cancel.setAttribute('name', 'cancel');
//   btnBox.append(submit, cancel);

//   form.innerHTML = html;
//   form.append(input, btnBox);
//   document.body.append(foggedSheet, form);
//   form.style.marginLeft = `${-(form.offsetWidth / 2)}px`;
//   form.style.marginTop = `${-(form.offsetHeight / 2)}px`;
//   input.focus();
//   return form;
// }

// function showModalForm(html, callBack) {
//   let form = document.querySelector('#importantForm');
//   if (!form) {
//     form = renderForm(html);
//   }

//   form.hidden = false;
//   document.querySelector('#foggedSheet').hidden = false;
//   form.querySelector('input').focus();
//   document.body.style.overflowY = '';

//   const { input, submit, cancel } = form.elements;
//   let value = null;

//   function oprateForm() {
//     form.hidden = true;
//     foggedSheet.hidden = true;
//     callBack(value);
//     form.reset();
//   }

//   form.onsubmit = () => {
//     if (value === '') return false;
//     oprateForm();
//     return false;
//   };

//   submit.onclick = () => {
//     value = input.value;
//   };

//   cancel.onclick = () => {
//     value = null;
//   };

//   document.onkeydown = (e) => {
//     if (e.code === 'Escape') {
//       value = null;
//       oprateForm();
//     }
//   };

//   cancel.onkeydown = (e) => {
//     if (e.key === 'Tab' && !e.shiftKey) {
//       input.focus();
//       return false;
//     }
//   };

//   input.onkeydown = (e) => {
//     if (e.key === 'Tab' && e.shiftKey) {
//       cancel.focus();
//       return false;
//     }
//   };
// }

// button.addEventListener('click', () => showModalForm('<p>Your message</p>', (val) => console.log(val)));

/**
 *  PRELODING IMAGES
 */
// function preloadImages(sources, callback) {
//   const promises = [];
//   sources.forEach((path) => {
//     const p = new Promise((resolve, reject) => {
//       const img = document.createElement('img');
//       img.src = path;
//       img.onload = () => resolve();
//       img.onerror = () => resolve();
//     });
//     promises.push(p);
//   });
//   Promise.all(promises).then(callback);
// }

// async function preloadImagesAsync(sources, callback) {
//   await sources.forEach((path) => {
//     const img = document.createElement('img');
//     img.src = path;
//   });
//   callback();
// }

// const sources = [
//   'https://en.js.cx/images-load/1.jpg',
//   'https://en.js.cx/images-load/2.jpg',
//   'https://en.js.cx/images-load/3.jpg',
// ];

// preloadImagesAsync(sources, () => {
//   console.log('All images are loaded');
//   const gallery = document.createElement('article');
//   const p = document.createElement('p');
//   p.textContent = 'Async gallary';
//   gallery.append(p);
//   document.body.append(gallery);
//   sources.forEach((path) => {
//     const img = document.createElement('img');
//     img.src = path;
//     gallery.append(img);
//   });
// });

// const gallery = document.createElement('article');
// const p = document.createElement('p');
// p.textContent = 'Online gallary';
// gallery.append(p);
// document.body.append(gallery);
// sources.forEach((path) => {
//   const img = document.createElement('img');
//   img.src = `${path}?${Math.random()}`;
//   gallery.append(img);
// });

/**
 *
 */
