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
