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
