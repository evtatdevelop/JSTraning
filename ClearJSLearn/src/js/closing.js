'use strict';

console.log('Advanced work with functions 🛠');
console.log('Closing 🔐');

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log( sum(2)(3));

// function inBetween(a, b) {
//   return function (item) {
//     return (item >= a && item <= b);
//   };
// }
// function inArray(arr) {
//   return function (item) {
//     return arr.includes(item);
//   };
// }
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// const users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
// ];
// function byField(fieldName) {
//   return (a, b) => ((a[fieldName] > b[fieldName]) ? 1 : -1);
// }
// console.log(users.sort(byField('name')));
// users.forEach((user) => console.log(user.name)); // Ann, John, Pete

// console.log(users.sort(byField('age')));
// users.forEach((user) => console.log(user.name)); // Pete, Ann, John

// function makeArmy() {
//   const shooters = [];

//   // let i = 0;
//   for (let i = 0; i < 10; i++) {
//     const shooter = function () {
//       console.log( i );
//     };
//     shooters.push(shooter);
//     // i++;
//   }

//   return shooters;
// }

// const army = makeArmy();
// // army.forEach((each) => console.log(each()));
// console.log(army);
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//     // return counter.count++;
//   }
//   // counter.count = 0;

//   counter.set = function (value) { count = value; };

//   counter.decrease = () => count--;

//   return counter;
// }

// const counter = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// counter.set(10);
// counter.decrease();
// console.log( counter() ); // 1
// console.log( counter() ); // 1

// function sum(a) {
//   let currentSum = a;

//   function fn(b) {
//     currentSum += b;
//     return fn;
//   }

//   fn.toString = function () {
//     return currentSum;
//   };

//   return fn;
// }

// console.log( sum(2)(3) );
// // console.log( sum(2)(3)(2) );
// // console.log( sum(2)(3)(2)(3) );
// ?????????????????????????????????????????
