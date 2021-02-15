'use strict';

console.log('Prototype 🔬');

/**
 *
 */
// const head = {
//   glasses: 1,
// };

// const table = {
//   pen: 3,
//   __proto__: head,
// };

// const bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// const pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);

/**
 *
 */
// const hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// const speedy = {
//   stomach: [],
//   __proto__: hamster,
// };

// const lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// speedy.eat('apple');
// console.log( speedy.stomach );
// console.log( lazy.stomach ); // apple

/**
 *
 */
// function User(name) {
//   this.name = name;
// }
// User.prototype = {
//   constructor: User,
// };
// const user = new User('John');
// const user2 = new user.constructor('Pete');

// console.log( user2.name );

/**
 *
 */
// const arr = [1, 2, 3];
// console.log(arr);
// console.dir(arr);
// console.dir(new String('string'));

// function repit(n, str) {
//   return new Array(n + 1).join(str);
// }

// console.log(repit(3, 'La'));

/**
 *
 */
// function f(str) {
//   alert(str);
// }

// Function.prototype.defer = function (ms, props) {
//   setTimeout(() => {
//     this(props);
//   }, ms);
// };

// f.defer(1000, 'Hello!'); // выведет "Hello!" через 1 секунду

/**
 *
 */
// function f(a, b) {
//   console.log( a + b );
// }

// Function.prototype.defer = function (ms) {
//   const fun = this;
//   return function (...props) {
//     setTimeout(() => fun.apply(this, props), ms);
//   };
// };

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

/**
 *
 */
// const dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join(',');
//     },
//   },
// });

// // dictionary.toString = Array.prototype.toString;
// // Object.defineProperty(dictionary, toString, {
// //   writable: false,
// //   enumerable: false,
// //   configurable: false,
// // });
// // Object.setPrototypeOf(dictionary, {
// //   toString() {
// //     console.log(this);
// //   },
// // });

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for (const key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

/**
 *
 */
