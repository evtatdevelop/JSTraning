'use strict';

console.log('Advanced work with functions 🛠');
console.log('Recursion and stack 🤿🗑');

// function pow(x, n) {
//   return (n === 1) ? x : (x * pow(x, n - 1));
// }
// console.log( pow(5, 5) );

// function sumTo(n) {
//   // if (n === 1) return 1;
//   // return n + sumTo(n - 1);

//   return (n * (n + 1)) / 2;

//   // let sum = 0;
//   // for (let i = 1; i <= n; i++) {
//   //   console.log(i);
//   //   sum += i;
//   // }
//   // return sum;
// }

// console.log( sumTo(100) ); // 5050
// console.log( sumTo(5) ); // 5050
// console.log( sumTo(100000) );
// console.log( sumTo(8) );

// function factorial(n) {
//   return (n === 1) ? 1 : n * factorial(n - 1);
// }
// console.log( factorial(5) ); // 120

// function fib(n) {
//   // if (n === 1 || n === 2) return 1;
//   // return fib(n - 1) + fib(n - 2);

//   let a = 1;
//   let b = 1;
//   for ( let i = 3; i <= n; i++) {
//     const c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// const list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// // function printList(listIn) {
// //   console.log(listIn.value);
// //   if (listIn.next) printList(listIn.next);
// // }

// function printList(listIn) {
//   let current = listIn;
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// }
// printList(list);

// function printList(listIn) {
//   if (listIn.next) printList(listIn.next);
//   console.log(listIn.value);
// }

// function printList(listIn) {
//   let current = listIn;
//   const arr = [];
//   while (current) {
//     arr.push(current.value);
//     current = current.next;
//   }
//   arr.reverse().map((item) => console.log(item));
// }
// printList(list);
