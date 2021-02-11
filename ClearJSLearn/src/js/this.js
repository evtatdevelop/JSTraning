'use strict';

console.log('Advanced work with functions 🛠');
console.log('this 😎');

/**
 *
 */
// function askPassword(ok, fail) {
//   const password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// const user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//   const password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// const user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
