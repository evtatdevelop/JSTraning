'use strict';

console.log('methods of primitive 🎈');

// function sum2number(a, b, x) {
//   return (parseFloat(a) + parseFloat(b)).toFixed(x);
// }
// const a = prompt('num 1?', 0);
// const b = prompt('num 2?', 0);
// console.log(sum2number(a, b, 2));

// function readNumber() {
//   let num;
//   do {
//     num = prompt('num ?', 0);
//     if (!num) return null;
//   } while (!isFinite(num));
//   return +num;
// }

// console.log( readNumber() );

// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }
// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(2, 5) ); // 3.7894332423
// console.log( random(4, 5) ); // 4.3435234525

// function random(min, max) {
//   const num = Math.random() * (max + 1 - min) + min;
//   return Math.floor(num);
// }
// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(2, 5) ); // 3.7894332423
// console.log( random(4, 5) ); // 4.3435234525

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log( ucFirst('вася') );

// function checkSpam(str) {
//   const dic = ['viagra', 'XXX'];
//   let result = false;
//   dic.forEach( (test) => {
//     if ( str.toUpperCase().includes( test.toUpperCase() ) ) { result = true; }
//   });
//   return result;
// }
// console.log( checkSpam('buy ViAgRA now') );
// console.log( checkSpam('free xxxxx') );
// console.log( checkSpam('innocent rabbit') );

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return `${str.slice(0, maxlength - 1)}...`;
//   }
//   return str;
// }
// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
// console.log(truncate('Всем привет!', 20));

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log( extractCurrencyValue('$120') === 120 );
