'use strict';

console.log('Regular Expressions 🎨');

let str = 'Завтрак в 09:00 в комнате 123:456.';
console.log(str.match(/\b\d\d:\d\d\b/g)[0]);

let regexp = /\b\d\d[:-]\d\d\b/g;
console.log( 'Завтрак в 09:00. Ужин в 21-30'.match(regexp) ); // 09:00, 21-30

regexp = /\.{3,}/g;
console.log( 'Привет!... Как дела?.....'.match(regexp) ); // ..., .....

regexp = /#[\da-f]{6}\b/gi;
str = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';
console.log( str.match(regexp) ); // #121212,#AA00ef
