'use strict';

console.log('browser 🎀');

// function sayHi() {
//   console.log('H!');
// }
// sayHi();
// window.sayHi();

// console.log(window.innerHeight);

// document.body.style.background = '#161619';
// setTimeout(() => document.body.style.background = '', 1000);

/**
 *
 */
// const app = document.body.firstElementChild;
// const section = app.firstElementChild.nextElementSibling;
// const h2 = section.firstElementChild;
// const ul = h2.nextElementSibling;
// const liPite = ul.lastElementChild;
// console.log(h2, liPite);

/**
 *
 */
// const table = document.createElement('table');
// for (let i = 1; i <= 5; i++) {
//   const tr = document.createElement('tr');
//   for (let j = 1; j <= 5; j++ ) {
//     const td = document.createElement('td');
//     td.textContent = `${j}:${i}`;
//     tr.append(td);
//   }
//   table.append(tr);
//   table.classList.add('table');
// }
// section.append(table);

// const tableElement = section.lastElementChild;
// const tabElRows = tableElement.rows;
// for (const row of tabElRows) {
//   const rowCells = row.cells;
//   for (const cell of rowCells) {
//     if (row.rowIndex === cell.cellIndex) {
//       cell.style.backgroundColor = 'red';
//     }
//   }
// }

/** *
 *
 */
// const lis = document.querySelectorAll('body>ul li');

// for ( const li of lis ) {
//   const ln = li.querySelectorAll('li').length;
//   const text = li.firstChild.data.trim();

//   console.log(text, ln);
// }

/**
 *
 */
// const element = document.querySelector('[data-widget-name]');
// console.log(element.dataset.widgetName);

/**
 *
 */
// const links = document.querySelectorAll('ul>li>a');
// for ( const link of links) {
//   if (
//     link.getAttribute('href').includes('://')
//     && !link.href.startsWith('http://internal.com')
//   ) {
//     link.style.color = 'orange';
//   }
//   console.log(link.href, link.getAttribute('href'));
// }

// const selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// const links = document.querySelectorAll(selector);

// links.forEach((link) => link.style.color = 'orange');

/**
 *
 */
// function createList() {
//   const liElements = [];
//   while (true) {
//     const insert = prompt('Add line: ');
//     if (!insert) break;
//     const li = document.createElement('li');
//     li.textContent = insert;
//     liElements.push(li);
//   }
//   return liElements;
// }

/**
 *
 */
// const data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },
//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// };
// function createTree(data) {
//   const arr = Object.entries(data);
//   if (arr.length === 0) return '';
//   const ul = document.createElement('ul');
//   for (const item of arr) {
//     const [key, val] = item;
//     const li = document.createElement('li');
//     li.textContent = key;
//     if (typeof (val) === 'object') {
//       li.append(createTree(val));
//     }
//     ul.append(li);
//   }
//   return ul;
// }
// document.body.append(createTree(data));

// //
// // *
// //
// const lis = document.querySelectorAll('ul li');
// for (const li of lis) {
//   const childNum = li.querySelectorAll('li').length;
//   if (!childNum) continue;
//   li.firstChild.data += `[${childNum}]`;
// }

/**
 *
 */
// function createCalendar(elem, year, month) {
//   const table = document.createElement('table');
//   table.classList.add('table');

//   const days = ['Mn', 'Tu', 'We', 'Th', 'Fr', 'St', 'Sn'];
//   const thead = document.createElement('thead');
//   for (let i = 0; i < 7; i++) {
//     const th = document.createElement('th');
//     th.textContent = days[i];
//     thead.append(th);
//   }
//   table.append(thead);

//   const thisMonth = new Date(year, month - 1);
//   const nextMonth = new Date(year, month);
//   const numDays = (nextMonth - thisMonth) / 1000 / 24 / 60 / 60;
//   const firstDay = thisMonth.getDay();
//   const lastDay = nextMonth.getDay() - 1;
//   const cells = (lastDay === 0) ? firstDay - 1 + numDays : (firstDay - 1) + numDays + (7 - lastDay);

//   const tBody = document.createElement('tbody');
//   let currentDay = 2 - firstDay;
//   for (let w = 1; w <= cells / 7; w++ ) {
//     const tr = document.createElement('tr');
//     for (let d = 1; d <= 7; d++) {
//       const td = document.createElement('td');
//       if (currentDay < 1 || currentDay > numDays) {
//         td.textContent = '';
//       } else {
//         thisMonth.setDate(currentDay);
//         td.textContent = thisMonth.getDate();
//       }
//       currentDay++;
//       tr.append(td);
//     }
//     tBody.append(tr);
//   }
//   table.append(tBody);
//   elem.append(table);
// }
// createCalendar(document.body, 2012, 9);

/**
 *
 */
// function getTime() {
//   const time = new Date();
//   let h = time.getHours();
//   let m = time.getMinutes();
//   let s = time.getSeconds();
//   h = (h < 10) ? `0${h}` : `${h}`;
//   m = (m < 10) ? `0${m}` : `${m}`;
//   s = (s < 10) ? `0${s}` : `${s}`;
//   return `<span class='h'>${h}</span>:<span class='m'>${m}</span>:<span class='s'>${s}</span>`;
// }
// const article = document.createElement('article');
// let timer;
// article.innerHTML = getTime();

// const btnStart = document.createElement('button');
// const btnStop = document.createElement('button');
// btnStart.textContent = 'Start';
// btnStop.textContent = 'Stop';

// btnStop.addEventListener('click', () => clearInterval(timer));
// btnStart.addEventListener('click', () => {
//   timer = setInterval(() => {
//     article.innerHTML = getTime();
//   }, 1000);
// });

// document.body.append(article);
// document.body.append(btnStart);
// document.body.append(btnStop);

/**
 *
 */
// const listString = '<ul><li id="one">1</li><li id="two">4</li></ul>';
// document.body.insertAdjacentHTML('beforeend', listString);
// const newString = '<li>2</li><li>3</li>';
// const two = document.querySelector('#two');
// two.insertAdjacentHTML('beforebegin', newString);
// // const lastLi = two.cloneNode(true);
// // two.remove();
// // const ul = document.querySelector('ul');
// // ul.insertAdjacentHTML('beforeend', newString);
// // ul.append(lastLi);

/**
 *
 */
// const table = document.querySelector('#table');
// // const tres = table.querySelectorAll('tr');
// // const thead = table.firstElementChild.firstElementChild.cloneNode(true);
// const newOrder = Array.from(table.rows)
// // newOrder.shift(0);
//   .slice(1)
//   .sort((a, b) => (a.firstElementChild.textContent > b.firstElementChild.textContent ? 1 : -1));
// // table.innerHTML = '';
// // table.append(thead, ...newOrder);
// table.tBodies[0].append(...newOrder);
// // console.log(table.tBodies[0]);

/**
 *
 */
// function showNotification(options) {
//   const {
//     top, right, html, className,
//   } = options;
//   const div = document.createElement('div');
//   div.className = 'notification';
//   div.classList.add('welcome');
//   div.innerHTML = html;
//   div.style.top = `${top}px`;
//   div.style.right = `${right}px`;
//   document.body.append(div);
//   setTimeout(() => div.remove(), 1500);
//   console.log(top, right, html, className);
// }

// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: 'Hello!', // HTML-уведомление
//   className: 'welcome', // дополнительный класс для div (необязательно)
// });

/**
 *
 */
// function getScrollBottom(element) {
//   return scrollBottom = element.scrollHeight
//     - (element.scrollTop + element.clientHeight);
// }

// function getScrollWidth() {
//   const el = document.createElement('div');
//   el.style.overflowY = 'scroll';
//   el.style.height = '50px';
//   el.style.width = '50px';
//   document.body.append(el);
//   const scrollWidth = el.offsetWidth - el.clientWidth;
//   el.remove();
//   return scrollWidth;
// }

/**
 *
 */
// const field = document.createElement('div');
// field.style.cssText = `
// width: 300px;
// height: 250px;
// position: relative;
// border: 3px solid #007700;
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
// `;
// field.append(div);
// document.body.append(field);
// div.style.left = `${field.clientWidth / 2 - (div.offsetWidth / 2)}px`;
// div.style.top = `${field.clientHeight / 2 - (div.offsetHeight / 2)}px`;

/**
 *
 */
