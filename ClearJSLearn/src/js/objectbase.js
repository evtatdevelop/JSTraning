'use strict';

console.log('Objects🍔🍔');

// function makeAdmin(name, age, date) {
//   return {
//     name,
//     age,
//     admin: true,
//     [date]: Date.now(),
//     'fulll info': `${name}, ${age}.`,
//   };
// }

// const newAdmin = makeAdmin('John', 30, 'date');
// if ('fulll info' in newAdmin) {
//   console.log(newAdmin);
// }

// for (const prop in newAdmin) {
//   console.log(prop, newAdmin[prop]);
// }

// console.log(Object.entries(newAdmin));

// user = {};
// user.name = 'John';
// user.surName = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//   for (key in obj) {
//     return false;
//   }
//   return true;
// }
// const schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule)); // false

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function getTotal(salaries) {
//   let result = 0;
//   for (prop in salaries) {
//     result += salaries[prop];
//   }
//   return result;
// }
// console.log( getTotal(salaries) );

// function multiplyNumeric(obj) {
//   for (prop in obj) {
//     if ( typeof (obj[prop]) === 'number' ) {
//       obj[prop] *= 2;
//     }
//   }
// }

// const menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// multiplyNumeric(menu);

// console.log(menu);

// const user = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   position: 'admin',
// };
// const roles = {
//   edit: true,
//   manage: false,
// };
// const newUser = {
//   location: 'Earth',
//   position: 'user',
// };
// Object.assign(newUser, user, roles);
// console.log(newUser);
// // const secondAdmin = Object.assign({}, newUser);
// const secondAdmin = { ...newUser };
// console.log(secondAdmin);

// const user = {
//   fullName: 'John Smith',
//   age: 30,
//   size: {
//     height: 175,
//     weight: 90,
//   },
// };

// const newUser = _.cloneDeep(user);
// console.log(newUser);

// function test() {
//   console.log(this.name);
// }
// test();

// const user = {
//   firstName: 'John',
//   sayName() {
//     console.log(this.firstName);
//   },
// };
// user.sayName();

// const admin = {
//   firstName: 'Max',
// };
// admin.sayName = user.sayName;
// admin.sayName();

// function sayHi() {
//   console.log(`${this.firstName}: H!👋`);
// }
// user.hi = sayHi;
// admin.hi = sayHi;
// user.hi();
// admin.hi();

// const boss = {
//   firstName: 'Ross',
// };
// const foo = user.sayName.bind(boss);
// console.log(foo);
// foo();
// const foo1 = sayHi.bind(boss);
// foo1();

// const arrowHi = () => console.log(this.firstName);
// arrowHi();

// const user = {
//   name: 'Джон',
//   go() { console.log(this.name); },
// };
// console.log(user.go);
// (user.go)();

// const some = user.go.bind(user);
// some();

// let obj;
// let method;
// obj = {
//   go() { console.log(this); },
// };
// obj.go(); // (1) [object Object]
// (obj.go)(); // (2) [object Object]
// (method = obj.go)(); // (3) undefined
// (obj.go || obj.stop)(); // (4) undefined

// function makeUser() {
//   console.log(this);
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// }
// const user = makeUser();
// console.log( user );
// console.log( user.ref.name );
// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }
// const user = makeUser();
// console.log( user.ref );
// console.log( user.ref().name ); // Джон

// const calculator = {
//   // a: null,
//   // b: null,
//   read() {
//     this.a = +prompt('Number a ?', 0);
//     this.b = +prompt('Number b ?', 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// const ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log( this.step );
//     return this;
//   },
// };
// ladder.showStep();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.up().up().up().down()
//   .showStep();
