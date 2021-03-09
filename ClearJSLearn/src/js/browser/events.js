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
//   // button.addEventListener('click', (e) => {
//   //   e.target.closest('.art').remove();
//   // });
//   button.setAttribute('data-closer', 'close');
//   item.append(button);
// }
// section.addEventListener('click', (e) => {
//   const { closer } = e.target.dataset;
//   if (closer) {
//     e.target.closest('.art').remove();
//   }
// });

/**
 * Carusel
 */
// const ul = document.querySelector('.carusel ul');
// const NUM_VISIBLE = 3;
// const STEP = 2;
// const num = ul.querySelectorAll('li').length;
// const itemWith = ul.querySelector('li').offsetWidth;
// const numHiddenItems = num - NUM_VISIBLE;
// let rightSideItems = numHiddenItems;
// let step = STEP;

// document.querySelector('.btnForward').addEventListener('click', () => {
//   if (rightSideItems <= 0) return;
//   if (num - rightSideItems >= STEP) step = STEP;
//   if (rightSideItems < STEP) step = rightSideItems;
//   rightSideItems -= step;
//   ul.style.transform += `translateX(-${itemWith * step}px)`;
// });

// document.querySelector('.btnBack').addEventListener('click', () => {
//   if (rightSideItems >= numHiddenItems) return;
//   if (num - rightSideItems > STEP) step = STEP;
//   if (numHiddenItems - rightSideItems < step) step = numHiddenItems - rightSideItems;
//   rightSideItems += step;
//   ul.style.transform += `translateX(${itemWith * step}px)`;
// });

/**
 * CARUSEL ( CLASS )
 */
// class Carusel {
//   constructor(element) {
//     // this._element = element;
//     element.addEventListener('click', this.onClick.bind(this));
//     this.ul = element.querySelector('ul');
//     this.numVisible = 3;
//     this.initStep = 2;
//     this.num = this.ul.querySelectorAll('li').length;
//     this.itemWith = this.ul.querySelector('li').offsetWidth;
//     this.numHiddenItems = this.num - this.numVisible;
//     this.rightSideItems = this.numHiddenItems;
//     this.step = this.initStep;
//   }

//   forward() {
//     if (this.rightSideItems <= 0) return;
//     this.step = (this.rightSideItems < this.initStep)
//       ? this.step = this.rightSideItems
//       : this.step = this.initStep;
//     this.rightSideItems -= this.step;
//     this.ul.style.transform += `translateX(-${this.itemWith * this.step}px)`;
//   }

//   back() {
//     if (this.rightSideItems >= this.numHiddenItems) return;
//     this.step = (this.numHiddenItems - this.rightSideItems < this.step)
//       ? this.numHiddenItems - this.rightSideItems
//       : this.step = this.initStep;
//     this.rightSideItems += this.step;
//     this.ul.style.transform += `translateX(${this.itemWith * this.step}px)`;
//   }

//   onClick(event) {
//     const { action } = event.target.dataset;
//     if (action) {
//       this[action]();
//     }
//   }
// }

// new Carusel(document.querySelector('.carusel'));

/**
 * Folding Multilevel List
 */
// const menu = {
//   Animals: {
//     Mammals: {
//       Cows: null,
//       Donkeys: null,
//       Dogs: null,
//       Tigers: null,
//     },
//     Other: null,
//   },
//   Fish: {
//     Aquarium: {
//       Guppy: null,
//       Scalars: null,
//     },
//     Sea: {
//       'Sea trout': null,
//     },
//   },
// };

// function renderMenu(menu) {
//   const ul = document.createElement('ul');
//   const arrMenu = Object.entries(menu);
//   for (const item of arrMenu) {
//     const li = document.createElement('li');
//     li.innerHTML = `<span data-action = "toggle">${item[0]}</span>`;
//     if (item[1] && typeof (item[1]) === 'object') {
//       li.append(renderMenu(item[1]));
//     }
//     ul.append(li);
//   }
//   return ul;
// }
// const mainMenu = renderMenu(menu);
// document.body.querySelector('.app').append(mainMenu);

// mainMenu.addEventListener('click', (e) => {
//   const { target } = e;
//   const targetUl = target.closest('li').querySelector('ul');
//   console.log(target.dataset.action);
//   if (target.dataset.action === 'toggle' && targetUl) targetUl.classList.toggle('hidden');
// });

/**
 * TABLE SORTING
 */
// const table = document.querySelector('.sort-tab');
// table.addEventListener('click', (e) => {
//   const nameFn = e.target.dataset.sort;
//   if (nameFn) {
//     window[nameFn](e.target.cellIndex);
//   }
// });

// function age(column) {
//   const newOrder = Array.from(table.rows)
//     .slice(1)
//     .sort((a, b) => (+Array.from(a.cells)[column].textContent - +Array.from(b.cells)[column].textContent));

//   table.tBodies[0].append(...newOrder);
// }
// function name(column) {
//   const newOrder = Array.from(table.rows)
//     .slice(1)
//     .sort((a, b) => (Array.from(a.cells)[column].textContent > Array.from(b.cells)[column].textContent ? 1 : -1));

//   table.tBodies[0].append(...newOrder);
// }

/**
 * HINTS
 */
// function renderHint(content) {
//   const div = document.createElement('div');
//   div.classList.add('hint');
//   div.innerHTML = content;
//   return div;
// }
// document.addEventListener('mouseover', (e) => {
//   const { target } = e;
//   const dataset = target.dataset.hint;
//   if (dataset) {
//     const hint = renderHint(dataset);
//     document.body.append(hint);

//     const shiftX = (hint.offsetWidth - target.offsetWidth) / 2;
//     const shiftY = 5 + hint.offsetHeight;

//     const hPosition = (target.offsetLeft - (shiftX) < 5)
//       ? 5 : target.offsetLeft - (shiftX);
//     const vPosition = (target.offsetTop - (shiftY) > window.pageYOffset)
//       ? target.offsetTop - (shiftY)
//       : target.offsetTop + target.offsetHeight + 5;

//     hint.style.left = `${hPosition}px`;
//     hint.style.top = `${vPosition}px`;
//   }
// });
// document.addEventListener('mouseout', (e) => {
//   const { target } = e;
//   const dataset = target.dataset.hint;
//   if (dataset) {
//     document.querySelector('.hint').remove();
//   }
// });

/**
 *
 */
// const content = '<p>Lorem amet.<a href="index.html"><span>Lorem.</span></a>Lorem dolor.<a href="index.html">Lorem, ipsum.</a>Lorem sdlff fds</p>';
// const contents = document.createElement('div');
// contents.style.cssText = `
//   margin: 10px;
//   border: 1px solid #424242;
//   padding: 10px;
// `;
// contents.innerHTML = content;
// document.body.append(contents);

// contents.addEventListener('click', (e) => {
//   const anchor = e.target.closest('a');
//   if (anchor) {
//     if (!confirm('Do you really want to leave this page?')) {
//       e.preventDefault();
//     }
//   }
// });

/**
 * GALLARY
 */
// const gallery = document.createElement('section');
// gallery.classList.add('gallary');
// const scene = document.createElement('img');
// scene.classList.add('scene');
// scene.src = 'img/gallery/y9luocwa.bmp';
// const thumb = document.createElement('div');
// thumb.classList.add('thumb');
// for (let i = 2; i <= 6; i++ ) {
//   const linkImg = document.createElement('a');
//   linkImg.href = `img/gallery/img${i}-lg.jpg`;
//   const thumbImg = document.createElement('img');
//   thumbImg.src = `img/gallery/thumb/img${i}-thumb.jpg`;
//   linkImg.append(thumbImg);
//   thumb.append(linkImg);
// }
// gallery.append(scene, thumb);
// document.body.append(gallery);

// gallery.addEventListener('click', (e) => {
//   const anchor = e.target.closest('a');
//   if (anchor) {
//     e.preventDefault();
//     scene.src = e.target.closest('a').href;
//   }
// });

/**
 *
 */
// const selList = document.querySelector('.select-list');
// selList.onmousedown = () => false;
// selList.addEventListener('click', (e) => {
//   const { target } = e;
//   if (!e.metaKey && !e.ctrlKey) {
//     target.closest('ul').querySelectorAll('li').forEach((element) => {
//       element.classList.remove('selected');
//     });
//   }
//   target.classList.add('selected');
// });

/**
 * SMART HINTS
 */
// function renderHint(anchor) {
//   const hint = document.createElement('div');
//   hint.classList.add('hint');
//   hint.innerHTML = anchor.dataset.hint;
//   document.body.append(hint);

//   const shiftX = (hint.offsetWidth - anchor.offsetWidth) / 2;
//   const shiftY = 5 + hint.offsetHeight;
//   const hPosition = (anchor.offsetLeft - (shiftX) < 5)
//     ? 5 : anchor.offsetLeft - (shiftX);
//   const vPosition = (anchor.offsetTop - (shiftY) > window.pageYOffset)
//     ? anchor.offsetTop - (shiftY)
//     : anchor.offsetTop + anchor.offsetHeight + 5;

//   hint.style.left = `${hPosition}px`;
//   hint.style.top = `${vPosition}px`;
// }

// let startX = 0;
// let startY = 0;
// let counter = 0;
// let hintedElement = null;
// // document.addEventListener('mouseover', (e) => {
// //   hintedElement = e.target.closest('[data-hint]');
// //   if (!hintedElement) return;
// // });

// document.addEventListener('mouseout', (e) => {
//   if (hintedElement) {
//     const hint = document.querySelector('.hint');
//     if (hint && e.target.closest('[data-hint]') !== e.relatedTarget.closest('[data-hint]')) {
//       hint.remove();
//     }
//   }
// });

// document.addEventListener('mousemove', (e) => {
//   hintedElement = e.target.closest('[data-hint]');
//   if (hintedElement) {
//     const moveX = Math.abs(startX - e.clientX);
//     const moveY = Math.abs(startY - e.clientY);
//     if ( moveX + moveY > 1 ) {
//       startX = e.clientX;
//       startY = e.clientY;
//       counter = 0;
//     }
//     ++counter;

//     if (!document.querySelector('.hint') && counter > 1 ) {
//       renderHint(hintedElement);
//     }
//   }
// });

/**
 * SMART HINTS CLASS
 */
// class HoverHint {
//   constructor(element) {
//     this.element = element;
//     this.startX = 0;
//     this.startY = 0;
//     this.counter = 0;
//     this.hintedElement = null;

//     this.element.addEventListener('mouseout', (e) => this.out(e));
//     this.element.addEventListener('mousemove', (e) => this.over(e));
//   }

//   over(e) {
//     this.hintedElement = e.target.closest('[data-hint]');
//     if (this.hintedElement) {
//       const moveX = Math.abs(this.startX - e.clientX);
//       const moveY = Math.abs(this.startY - e.clientY);
//       if ( moveX + moveY > 1 ) {
//         this.startX = e.clientX;
//         this.startY = e.clientY;
//         this.counter = 0;
//       }
//       ++this.counter;
//       if (!document.querySelector('.hint') && this.counter > 1 ) {
//         this.renderHint();
//       }
//     }
//   }

//   out(e) {
//     if (this.hintedElement) {
//       const hint = document.querySelector('.hint');
//       if (hint && e.target.closest('[data-hint]') !== e.relatedTarget.closest('[data-hint]')) {
//         hint.remove();
//       }
//     }
//   }

//   renderHint() {
//     const hint = document.createElement('div');
//     hint.classList.add('hint');
//     hint.innerHTML = this.hintedElement.dataset.hint;
//     document.body.append(hint);

//     const shiftX = (hint.offsetWidth - this.hintedElement.offsetWidth) / 2;
//     const shiftY = 5 + hint.offsetHeight;
//     const hPosition = (this.hintedElement.offsetLeft - (shiftX) < 5)
//       ? 5 : this.hintedElement.offsetLeft - (shiftX);
//     const vPosition = (this.hintedElement.offsetTop - (shiftY) > window.pageYOffset)
//       ? this.hintedElement.offsetTop - (shiftY)
//       : this.hintedElement.offsetTop + this.hintedElement.offsetHeight + 5;

//     hint.style.left = `${hPosition}px`;
//     hint.style.top = `${vPosition}px`;
//   }
// }

// new HoverHint(document.querySelector('.hints'));

/**
 * SLIDER
 */
// const slider = document.createElement('div');
// const rangeLine = document.createElement('div');
// const pointer = document.createElement('div');
// slider.classList.add('slider');
// rangeLine.classList.add('slider__rangeline');
// pointer.classList.add('slider__pointer');
// slider.append(rangeLine, pointer);
// document.body.append(slider);

// // pointer.addEventListener('mousedown', (e) => onMouseDoun(e));
// // function onMouseDoun(e) {
// //   const shiftX = e.clientX - pointer.offsetLeft;
// //   const minX = rangeLine.offsetLeft;
// //   const maxX = rangeLine.offsetLeft + rangeLine.offsetWidth - pointer.offsetWidth;

// //   function moveAt(posX) {
// //     pointer.style.left = `${posX}px`;
// //   }

// //   function movePointer(e) {
// //     if (pointer.offsetLeft < minX) return;
// //     if (pointer.offsetLeft > maxX) return;
// //     let left = e.clientX - shiftX;
// //     if (left < minX) left = minX;
// //     if (left > maxX) left = maxX;
// //     moveAt(left);
// //   }
// //   document.addEventListener('mousemove', movePointer);

// //   document.addEventListener('mouseup', () => {
// //     document.removeEventListener('mousemove', movePointer);
// //     document.onmouseup = null;
// //   });
// // }

// // document.ondragstart = function () {
// //   return false;
// // };

// /**
//  * SLIDER CLASS
//  */
// class Slider {
//   constructor(element) {
//     this.rangeLine = element.querySelector('.slider__rangeline');
//     this.pointer = element.querySelector('.slider__pointer');

//     this.minX = this.rangeLine.offsetLeft;
//     this.maxX = this.rangeLine.offsetLeft + this.rangeLine.offsetWidth - this.pointer.offsetWidth;
//     this.shiftX = null;

//     this.pointer.addEventListener('mousedown', (e) => this.onMouseDoun(e));
//   }

//   onMouseDoun(e) {
//     this.shiftX = e.clientX - pointer.offsetLeft;

//     const bindMovePointer = this.movePointer.bind(this);
//     document.addEventListener('mousemove', bindMovePointer);

//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', bindMovePointer);
//       document.onmouseup = null;
//     });
//   }

//   moveAt(posX) {
//     this.pointer.style.left = `${posX}px`;
//   }

//   movePointer(e) {
//     if (this.pointer.offsetLeft < this.minX) return;
//     if (this.pointer.offsetLeft > this.maxX) return;
//     let left = e.clientX - this.shiftX;
//     if (left < this.minX) left = this.minX;
//     if (left > this.maxX) left = this.maxX;
//     this.moveAt(left);
//   }
// }

// new Slider(slider);

/**
 *
 */
// function runOnKeys(func, code1, code2, ...code_n) {
//   const keySet = new Set();
//   const str = [...arguments].splice(1).join('');

//   document.addEventListener('keydown', (e) => {
//     keySet.add(e.code);
//   });

//   document.addEventListener('keyup', () => {
//     const strKey = Array.from(keySet).join('');
//     if (str === strKey) {
//       func();
//     }
//     keySet.clear();
//   });
// }
// runOnKeys(
//   () => alert('Привет!'),
//   'KeyQ',
//   'KeyW',
//   'KeyE',
// );

/**
 *  INFINITE SCROLL
 */
// const { body } = document;
// function addCurrentDate() {
//   const p = document.createElement('p');
//   p.innerHTML = new Date();
//   body.append(p);
// }

// function getContent(count) {
//   for (let i = 1; i < count; i++) {
//     addCurrentDate();
//   }
// }

// function addContentByScroll() {
//   const winHeight = document.documentElement.clientHeight;
//   const scrollHeight = document.documentElement.getBoundingClientRect().bottom;
//   if (scrollHeight - winHeight < 100) {
//     getContent(10);
//   }
// }

// getContent(30);
// window.addEventListener('scroll', addContentByScroll);

/**
 *  BUTTON SCROLL-UP
 */
// const buttonUp = document.createElement('button');
// buttonUp.classList.add('btn-up');
// document.body.append(buttonUp);
// buttonUp.addEventListener('click', () => {
//   window.scrollTo(0, 0);
// });

// window.addEventListener('scroll', () => {
//   const winHeight = document.documentElement.clientHeight;
//   const { pageYOffset } = window;
//   const btnUp = document.querySelector('.btn-up');
//   btnUp.style.display = (winHeight < pageYOffset) ? 'block' : 'none';
// });

/**
 * LOADING WITH SCROLLING
 */
// const gallery = document.createElement('div');
// gallery.style.cssText = `
// display: flex;
// flex-direction: column;
// `;
// document.querySelector('.app').append(gallery);
// for (let i = 2; i <= 6; i++) {
//   const img = document.createElement('img');
//   img.src = 'img/svg/placeholder.svg';
//   img.setAttribute('data-src', `img/gallery/img${i}-lg.jpg`);
//   img.setAttribute('width', '550');
//   img.setAttribute('height', '400');
//   gallery.append(img);
// }
// const addImg = document.createElement('img');
// addImg.src = 'img/gallery/y9luocwa.bmp';
// addImg.setAttribute('width', '550');
// addImg.setAttribute('height', '400');
// gallery.append(addImg);

// const winHeight = document.documentElement.clientHeight;
// const images = gallery.querySelectorAll('img[data-src]');
// function showImg() {
//   images.forEach((image) => {
//     if (
//       // image.getBoundingClientRect().top < winHeight
//       image.getBoundingClientRect().top - winHeight < winHeight
//       && !image.classList.contains('loaded')
//     ) {
//       setTimeout(() => {
//         image.setAttribute('src', image.dataset.src);
//         image.classList.add('loaded');
//       }, 1000);
//     }
//   });
// }

// showImg();
// window.addEventListener('scroll', showImg);
