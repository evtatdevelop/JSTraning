'use strict';

console.log('Advanced work with functions 🛠');
console.log('call && applay 🎟🎫');

// let work = (a, b) => {
//   alert( a + b ); // произвольная функция или метод
// };

// function spy(func) {
//   const calls = [];
//   return function f() {
//     f.calls = calls;
//     calls.push([...arguments]);
//     const result = func.call(this, ...arguments);
//     return result;
//   };
// }

// function spy(func) {
//   function f(...args) {
//     f.calls.push(args);
//     return func.call(this, arguments);
//   }
//   f.calls = [];
//   return f;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (const args of work.calls) {
//   console.log( `call:${args.join()}` ); // "call:1,2", "call:4,5"
// }

/**
 *
 */
// function f(x, y) {
//   console.log(x, y);
// }

// function delay(f, ms) {
//   function func() {
//     // setTimeout(() => f.call(this, ...arguments), ms);
//     setTimeout(() => f.apply(this, arguments), ms);
//   }
//   return func;
// }

// // создаём обёртки
// const f1000 = delay(f, 1000);
// const f1500 = delay(f, 1500);

// f1000('test', Math.random()); // показывает "test" после 1000 мс
// f1500('test', Math.random()); // показывает "test" после 1500 мс

/**
 *
 */
// function debounce(f, ms) {
//   let locked = false;
//   return function () {
//     if (locked) return;
//     locked = true;
//     f.apply(this, arguments);
//     setTimeout(() => locked = false, ms);
//   };
// }
// const f = debounce(console.log, 1000);
// f(1); // выполняется немедленно
// f(2); // проигнорирован
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прош

/**
 *
 */
// function f(a) {
//   console.log(a);
// }

// function throttle(f, ms) {
//   let locked = false;
//   let seveArgs;
//   let saveThis;

//   function func() {
//     if (locked) {
//       seveArgs = arguments;
//       saveThis = this;
//       return;
//     }

//     locked = true;
//     f.apply(this, arguments);
//     setTimeout(() => {
//       locked = false;
//       if (seveArgs) {
//         f.apply(saveThis, seveArgs);
//         seveArgs = saveThis = null;
//       }
//     }, ms);
//   }
//   return func;
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// const f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано
