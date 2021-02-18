'use strict';

console.log('Generators 🚂');

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield console.log(i);
// }
// const arr = [...generateSequence(75, 97)];

// function pseudoRandom(seed) {
//   let value = seed;
//   return function () {
//     value = value * 16807 % 2147483647;
//     return value;
//   };
// }
// const generator = pseudoRandom(1);
// alert(generator()); // 16807
// alert(generator()); // 282475249
// alert(generator()); // 1622650073

// function* pseudoRandom(seed) {
//   let value = seed;
//   while (true) {
//     value = value * 16807 % 2147483647;
//     yield value;
//   }
// }
// const generator = pseudoRandom(1);
// console.log(generator.next().value); // 16807
// console.log(generator.next().value); // 282475249
// console.log(generator.next().value); // 1622650073

/**
 *
 */
