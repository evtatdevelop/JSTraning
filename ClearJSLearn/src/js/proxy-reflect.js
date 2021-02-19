'use strict';

console.log('Proxy && Reflect 🎭');

// const user = {
//   name: 'John',
// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       if (prop in target) {
//         return Reflect.get(...arguments);
//       }
//       return new Error(`такого свойства не существует: "${prop}"`);
//     },
//   });
// }
// user = wrap(user);
// alert(user.name); // John
// alert(user.age); // Ошибка: такого свойства не существует

/**
 *
 */
// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop) {
//     if (prop < 0 ) {
//       return target[target.length + +prop];
//     }
//     return Reflect.get(target, prop);
//   },
// });

// alert( array[-1] ); // 3
// alert( array[-2] ); // 2
// alert( array[2] ); // 2

/**
 *
 */
// const handlers = Symbol('handlers');
// function makeObservable(target) {
//   target[handlers] = [];

//   target.observe = function (handler) {
//     this[handlers].push(handler);
//   };

//   return new Proxy(target, {
//     set(target, property, value) {
//       const success = Reflect.set(...arguments);
//       if (success) {
//         target[handlers].forEach((handler) => handler(property, value));
//       }
//       return success;
//     },
//     get(target, property) {
//       const result = Reflect.get(...arguments);
//       // if (result) {
//       // target[handlers].forEach((handler) => handler(property));
//       // }
//       return result;
//     },
//   });
// }

// let user = {};
// user = makeObservable(user);

// user.observe((key, value) => {
//   alert(`SET ${key}=${value}`);
// });
// user.observe((key) => alert(`GET ${key}`));

// user.name = 'John'; // выводит: SET name=John

// console.log(user.name);

// console.log(user[handlers]);
