'use strict';

console.log('events 🎪');

/**
 *
 */
// const p = document.createElement('p');
// p.textContent = 'I\'ll disappear';
// const btn = document.createElement('button');
// btn.textContent = 'Press Me';
// btn.setAttribute('id', 'btn');
// document.body.append(btn);
// document.body.append(p);

// btn.addEventListener('click', () => p.remove());
// btn.addEventListener('click', (e) => console.log(e.currentTarget.remove()));

/**
 *
 */
// const field = document.createElement('div');
// field.style.cssText = `
// width: 300px;
// height: 250px;
// position: relative;
// border: 10px solid #007700;
// background-color: #00FF00;
// `;
// const div = document.createElement('div');
// div.style.cssText = `
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   border-radius: 50%;
//   border: 2px solid green;
//   background-color: #D8B31C;
//   left: 0px;
//   top: 0px;
//   transition: All 1s;
// `;
// field.append(div);
// document.body.append(field);

// function moveBall(x, y) {
//   const relateCoords = {
//     left: field.offsetLeft + field.clientLeft + (div.offsetWidth / 2),
//     top: field.offsetTop + field.clientTop + (div.offsetHeight / 2),
//     right: field.offsetLeft + field.clientLeft + field.clientWidth - (div.offsetWidth / 2),
//     bottom: field.offsetTop + field.clientTop + field.clientHeight - (div.offsetHeight / 2),
//   };
//   if (x < relateCoords.left) x = relateCoords.left;
//   if (y < relateCoords.top) y = relateCoords.top;
//   if (x > relateCoords.right) x = relateCoords.right;
//   if (y > relateCoords.bottom) y = relateCoords.bottom;

//   div.style.left = `${x - relateCoords.left}px`;
//   div.style.top = `${y - relateCoords.top}px`;
// }

// field.addEventListener('click', (e) => {
//   moveBall(e.clientX, e.clientY);
// });

/**
 * MENU
 */
// const menu = {
//   Sweets: {
//     Pay: null,
//     Donat: null,
//     Hunny: null,
//   },
//   Sweets1: {
//     Pay: null,
//     Donat: null,
//   },
// };

// function renderMenu(menu) {
//   const ul = document.createElement('ul');
//   const arrMenu = Object.entries(menu);
//   for (const item of arrMenu) {
//     const li = document.createElement('li');
//     li.textContent = item[0];
//     if (item[1] && typeof (item[1]) === 'object') {
//       li.append(renderMenu(item[1]));
//     }
//     ul.append(li);
//   }
//   return ul;
// }
// const mainMenu = renderMenu(menu);
// mainMenu.classList.add('sweets');
// document.body.querySelector('.app').append(mainMenu);

// mainMenu.addEventListener('click', (e) => {
//   const targetItem = e.target;
//   if (targetItem) targetItem.classList.toggle('open');
// });

/**
 * Articles ++ closer
 */
// const data = [
//   {
//     title: 'Horse',
//     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi cumque, quos nulla quibusdam, doloremque ab ut cupiditate ',
//   },
//   {
//     title: 'Donkey',
//     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi cumque, quos nulla quibusdam, doloremque ab ut cupiditate',
//   },
//   {
//     title: 'Cat',
//     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi cumque, quos nulla quibusdam, doloremque ab ut cupiditate',
//   },
// ];

// const section = document.createElement('section');
// section.className = 'section';
// document.body.querySelector('.app').append(section);
// for (const item of data) {
//   const article = document.createElement('article');
//   article.className = 'art';
//   const h4 = document.createElement('h4');
//   const p = document.createElement('p');
//   h4.textContent = item.title;
//   p.textContent = item.info;
//   article.append(h4, p);
//   section.append(article);
// }

// const articles = document.querySelectorAll('.section>.art');
// for (const item of articles) {
//   item.style.position = 'relative';
//   const button = document.createElement('button');
//   button.innerHTML = '&times;';
//   button.style.cssText = `
//     color: red;
//     position: absolute;
//     font-size: 24px;
//     font-weight: 700;
//     top: 10px;
//     right: 10px;
//     background-color: transparent;
//     border: none;
//     cursor: pointer;
//   `;
//   button.addEventListener('click', (e) => {
//     e.target.closest('.art').remove();
//   });
//   item.append(button);
// }

const ul = document.querySelector('.carusel ul');
const NUM_VISIBLE = 3;
const STEP = 2;
const num = ul.querySelectorAll('li').length;
const itemWith = ul.querySelector('li').offsetWidth;
const numHiddenItems = num - NUM_VISIBLE;
let rightSideItems = numHiddenItems;
let step = STEP;

document.querySelector('.btnForward').addEventListener('click', () => {
  if (rightSideItems <= 0) return;
  if (num - rightSideItems >= STEP) step = STEP;
  if (rightSideItems < STEP) step = rightSideItems;
  rightSideItems -= step;
  ul.style.transform += `translateX(-${itemWith * step}px)`;
});

document.querySelector('.btnBack').addEventListener('click', () => {
  if (rightSideItems >= numHiddenItems) return;
  if (num - rightSideItems > STEP) step = STEP;
  if (numHiddenItems - rightSideItems < step) step = numHiddenItems - rightSideItems;
  rightSideItems += step;
  ul.style.transform += `translateX(${itemWith * step}px)`;
});
