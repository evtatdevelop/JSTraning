'use strict';

console.log('Regular Expressions 🎨');

const str = 'Завтрак в 09:00 в комнате 123:456.';
console.log(str.match(/\b\d\d:\d\d\b/g)[0]);