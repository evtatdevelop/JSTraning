'use strict';

// console.log('Itterable methods ✨✨');
// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// const values = ['Hare', 'Krishna', 'Hare', 'Krishna',
//   'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
// ];

// console.log( unique(values) ); // Hare,Krishna,:-O

// const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// function aclean(arr) {
//   const set = new Set();
//   const result = [];
//   // for (let i = 0; i < arr.length - 1; i++) {
//   //   const anagram = Array.from(arr[i].toUpperCase()).sort((a, b) => (a > b ? 1 : -1)).join('');
//   //   if (!set.has(anagram)) result.push(arr[i]);
//   //   set.add(anagram);
//   // }

//   const map = new Map();
//   for (const word of arr) {
//     const anagram = Array.from(word.toUpperCase()).sort().join('');
//     // if (!set.has(anagram)) result.push(word);
//     // set.add(anagram);
//     map.set(anagram, word);
//   }

//   // return result;
//   return Array.from(map.values());
// }

// console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// const map = new Map();

// map.set('name', 'John');

// const keys = Array.from(map.keys());

// keys.push('more');
// console.log(keys);

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function sumSalaries(salaries) {
//   let result = 0;
//   for (const salary of Object.values(salaries)) {
//     result += salary;
//   }
//   return result;
// }
// console.log( sumSalaries(salaries) ); // 650

// const user = {
//   name: 'John',
//   age: 30,
// };
// function count(user) {
//   // return Object.entries(user).length;
//   return Object.keys(user).length;
// }
// console.log( count(user) ); // 2

// const user = { name: 'John', years: 30 };

// const { name, years: age, isAdmin = false } = user;

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function topSalary(salaries) {
//   let name = '';
//   let sell = 0;
//   for (const [nam, sel] of Object.entries(salaries)) {
//     name = sel > sell ? nam : name;
//     sell = sel > sell ? sel : sell;
//   }
//   return name;
// }
// console.log( topSalary(salaries) );
