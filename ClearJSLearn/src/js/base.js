console.log('I\'m here ✨');

// alert('H!😀');

/**
 * https://learn.javascript.ru/variables
 */
// let admin;
// let firstName;

// firstName = 'John';
// admin = firstName;
// alert(admin);

// let palanetName = 'Earth';
// let currentUserName = admin;

// const BIRTHDAY = '16.12.1975';
// const currentBirthday = BIRTHDAY;

/**
 * https://learn.javascript.ru/types
 */
// let name = "Ilya";
// alert( `hello ${1}` ); // hello
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Iliya

/**
 * https://learn.javascript.ru/alert-prompt-confirm
 */
// let userName = prompt('What\'s your name?', 'Your name');
// if (userName) {
//   let confirmation = confirm('Are you shure?');
//   if (confirmation)
//     alert(`Ok! Your name is ${userName}`);
// }

/**
 * https://learn.javascript.ru/operators
 */
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// console.log('a = 2', a);
// console.log('b = 2', b);
// console.log('c = 2', c);
// console.log('d = 1', d);

// let a = 2;
// let x = 1 + (a *= 2);
// console.log('a = 4', a);
// console.log('x = 5', x);

// console.log(' "" + 1 + 0 = "10" ', "" + 1 + 0);
// console.log(' "" - 1 + 0 = -1 ', "" - 1 + 0);
// console.log(' true + false = 1 ', true + false);
// console.log(' 6 / "3" = 2 ', 6 / "3");
// console.log(' "2" * "3" = 6 ', "2" * "3");
// console.log(' 4 + 5 + "px" = 9px ', 4 + 5 + "px");
// console.log(' "$" + 4 + 5 = $45 ', "$" + 4 + 5);
// console.log(' "4" - 2 = 2 ', "4" - 2);
// console.log(' "4px" - 2 = NaN ', "4px" - 2);
// console.log(' 7 / 0 = Infinity ', 7 / 0);
// console.log(' "  -9  " + 5 = -" -9  5" ', "  -9  " + 5);
// console.log(' "  -9  " - 5 = -14 ', "  -9  " - 5);
// console.log(' null + 1 = 1 ',  null + 1);
// console.log(' undefined + 1 = NaN', undefined + 1);
// console.log(' " \t \n" - 2 = "-2"', " \t \n" - 2);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 3

/**
 * https://learn.javascript.ru/comparison
 */
// console.log('5 > 4 = TRUE', 5 > 4);
// console.log('"ананас" > "яблоко" = FALSE', "ананас" > "яблоко");
// console.log('"2" > "12" = FALSE', "2" > "12");
// console.log('undefined == null = TRUE', undefined == null);
// console.log('undefined === null = FALSE', undefined === null);
// console.log('null == "\n0\n" = FALSE', null == "\n0\n");
// console.log('null === +"\n0\n" = FALSE', null === +"\n0\n");

/**
 * https://learn.javascript.ru/ifelse
 */
// if ("0") {
//   alert( 'Привет' );
// }

// let answer = prompt('What is the afficial name of Java Script?');
// if (answer === 'ECMAScript') {
//   alert('Right! 🏆');
// } else{
//   alert ('😕Do not know? \r\n ECMAScript');
// }

// let input = +prompt('Any Number, Please👇?', 0);
// let result = ( input == 0 ) ? 0 :
//               ( input > 0 ) ? 1 : -1;
// alert(result);

// let result = (a + b < 4) ? 'Мало': 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
//               (login == 'Директор') ? 'Здравствуйте' :
//               (login == '') ? 'Нет логина' : '';

/**
 * https://learn.javascript.ru/logical-operators
 */
// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 1 2 (Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.)
// alert( 1 && null && 2 ); // null
// alert( alert(1) && alert(2) ); // 1 undefined
// alert( null || 2 && 3 || 4 ); // 3
// if (age >= 14 && age <= 90) {}
// if ( !(age >= 14 && age <= 90) ) {}
// if ( age < 14 || age > 90) {}

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// first third

// let user = prompt('👮‍♂️ Who are you?', '');
// if (user == '' || user == null) {
//   alert ("Canceled 👋");

// } else if (user !== 'admin'){
//   alert ("I don\'t know you ✋");

// } else {
//   let password = prompt('Password', '');

//   if (password == '' || password == null) {
//     alert ("Canceled 👋");
//   } else if (password !== 'I am a boss') {
//     alert ('Invalid password ✋');
//   } else {
//     alert ('Hello🤝')
//   }
// }

/**
 * https://learn.javascript.ru/while-for
 */
// let sum = 0;
// let num = '';
// while (true) {
//   num = prompt(`${sum += +num} + ... `, 0);
//   if (!num) break;
// }

// for (let x = 2; x < 11; x++) {
//   if (x % 2 != 0) continue;
//   console.log(x);
// }

// let i = 0;
// while ( i < 3 ) {
//   console.log( `number ${i}!` );
//   i++;
// }

// while (true) {
//   let num = prompt('Num  > 100', 0);
//   if (num === null || num > 100) break;
// }
// let num;
// do {
//   num = prompt('Num  > 100', 0);
// } while(num <= 100 && num !== null)

// let range = 10;
// out:for (let i = 2; i <= range; i++) {
//   for (let j = 2; j < i; j++ ) {
//     if (i % j == 0) continue out;
//   }
//   console.log(i);
// }

/**
 * https://learn.javascript.ru/switch
 */
// let browser;
// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (browser === 'Chrome'
//   || browser === 'Firefox'
//   ||browser === 'Safari'
//   ||browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;

//   default:
//     break;
// }

/**
 * https://learn.javascript.ru/function-basics
 */
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }
// console.log(checkAge(17));

// function min(a, b) {
//   return (a <= b) ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function pow(x, n) {
//   if (n < 1) return;
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

/**
 * https://learn.javascript.ru/arrow-functions-basics
 */
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.'),
// );
