'use strict';

console.log('Arrays 🎎🎎🎎');

// const dictionary = ['xxx', 'viagra'];
// const checkSpam = (str) => {
//   if (!str) return false;
//   for (const test of dictionary) {
//     if ( str.toUpperCase().includes( test.toUpperCase() ) ) return true;
//   }
//   return false;
// };
// console.log( checkSpam('buy ViAgRA now') );
// console.log( checkSpam('free xxxxx') );
// console.log( checkSpam('innocent rabbit') );

// const styles = ['Jazz', 'Bluz'];
// styles.push('Rock-n-Roll');
// styles[Math.floor(styles.length - 1 / 2)] = 'Classic';
// console.log(styles.shift());
// styles.unshift('REP', 'Raggy');
// console.log(styles);

// const arr = ['a', 'b'];
// arr.push(function () {
//   console.log( this );
// });
// arr[2](); // ?

// function sumInput() {
//   let num = '';
//   let sum = 0;
//   const arr = [];
//   do {
//     num = prompt('Num ?', '');
//     if ( isFinite(num) ) {
//       arr.push( +num );
//       sum += +num;
//     }
//   } while (num && isFinite(num));
//   console.log(arr);
//   return sum;
// }
// console.log( sumInput() );

// const arr = [1, -2, 3, 4, -9, 6];
// arr = [-1, 2, 3, -9];
// arr = [2, -1, 2, 3, -9];
// arr = [-1, 2, 3, -9, 11];
// arr = [-2, -1, 1, 2];
// arr = [100, -9, 2, -3, 5];
// arr = [1, 2, 3];
// function getMaxSubSum(arr) {
//   let currentSum = 0;
//   const result = [];
//   for (let k = 0; k < arr.length; k++) {
//     for (let i = k; i < arr.length; i++) {
//       currentSum += arr[i];
//       result.push(currentSum);
//     }
//     currentSum = 0;
//   }
//   console.log( Math.max(...result));
//   return result;
// }

// function getMaxSubSum1(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//   for (const item of arr) {
//     partialSum += item;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//   return maxSum;
// }

// console.log( getMaxSubSum(arr) );
// console.log( getMaxSubSum1(arr) );

// function camelize(str) {
//   return str
//     .split('-')
//     // .map((item) => { if (item) return item[0].toUpperCase() + item.slice(1); })
//     .map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)))
//     .join('');
// }

// console.log( camelize('background-color') );
// console.log( camelize('list-style-image') );
// console.log( camelize('-webkit-transition') );

// const arr = [5, 3, 8, 1];
// function filterRange(arr, a, b) {
//   return arr.filter((item) => (item >= a && item <= b));
// }
// console.log( filterRange(arr, 1, 4) );

// function filterRangeInPlace(inArr, a, b) {
//   inArr.forEach((item) => {
//     if (item < a || item > b) {
//       inArr.splice(inArr.indexOf(item), 1);
//     }
//   });
// }
// filterRangeInPlace(arr, 1, 4);

// const arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);

// console.log(arr);

// function copySorted(arr) {
//   const modifyArr = arr.slice().sort();

//   return modifyArr;
// }
// const arr = ['HTML', 'JavaScript', 'CSS'];
// console.log( copySorted(arr) );

// function Calculator() {
//   this.methods = [
//     {
//       method: '+',
//       foo(a, b) { return +a + +b; },
//     },
//     {
//       method: '-',
//       foo(a, b) { return +a - +b; },
//     },
//   ];

//   this.methods1 = {
//     '-': (a, b) => a - b,
//     '+': (a, b) => a + b,
//   };
//   this.calculate1 = function (str) {
//     const arrStr = str.split(' ');
//     const a = +arrStr[0];
//     const b = +arrStr[2];
//     const fn = arrStr[1];
//     if (!this.methods1[fn] || isNaN(a) || isNaN(b)) return NaN;
//     return this.methods1[fn](a, b);
//   };

//   this.valid = function (str) {
//     return (str.split(' ').length === 3 );
//   };

//   this.calculate = function (str) {
//     if (!this.valid(str)) return NaN;

//     const arrStr = str.split(' ');
//     const method = this.methods.find((item) => item.method == arrStr[1]);
//     return method.foo(arrStr[0], arrStr[2]);
//   };
//   this.addMethod = function (method, foo) {
//     this.methods.push({
//       method,
//       foo,
//     });
//   };
// }
// const calc = new Calculator();
// console.log(calc.calculate('3 + 7'));

// calc.addMethod('*', (a, b) => a * b);
// calc.addMethod('/', (a, b) => a / b);
// calc.addMethod('**', (a, b) => a ** b);
// console.log(calc.calculate('2 ** 3'));
// console.log(calc.calculate1('2 ** 3'));
// console.log(calc.calculate1('2 + 3'));

// const vasya = { name: 'Вася', age: 25 };
// const petya = { name: 'Петя', age: 30 };
// const masha = { name: 'Маша', age: 28 };
// const users = [vasya, petya, masha];

// const names = users.reduce((accum, item) => {
//   accum.push(item.name);
//   return accum;
// }, []);
// // const names = users.map((item) => item.name);

// console.log( names ); // Вася, Петя, Маша

// const vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// const petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// const masha = { name: 'Маша', surname: 'Петрова', id: 3 };
// const users = [vasya, petya, masha];

// // const usersMapped = users.reduce((accum, item) => {
// //   accum.push({
// //     fullName: `${item.name}`,
// //     id: item.id,
// //   });
// //   return accum;
// // }, []);

// const usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname} `,
//   id: item.id,
// }));

// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // Вася Пупкин

// const vasya = { name: 'Вася', age: 25 };
// const petya = { name: 'Петя', age: 30 };
// const masha = { name: 'Маша', age: 28 };
// const arr = [vasya, petya, masha];
// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }
// sortByAge(arr);
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// const arr = [1, 2, 3];
// // function shuffle(array) {
// //   array.sort(() => Math.random() - 0.5);
// // }
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // подсчёт вероятности для всех возможных вариантов
// const count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   const array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (const key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// function getAverageAge(users) {
//   return users.reduce((acc, item) => acc += item.age, 0) / users.length;
// }
// const vasya = { name: 'Вася', age: 25 };
// const petya = { name: 'Петя', age: 30 };
// const masha = { name: 'Маша', age: 29 };
// const arr = [vasya, petya, masha];
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item);
    return acc;
  }, []);
}

const strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', ':-O',
];

console.log( unique(strings) ); // кришна, харе, :-O
