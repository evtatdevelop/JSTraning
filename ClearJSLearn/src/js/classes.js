'use strict';

console.log('Classes 🩲');

// class Clocks {
//   constructor({ template }) {
//     this.template = template;
//     // this.timer = null;
//   }

//   render() {
//     const date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = `0${hours}`;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = `0${mins}`;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = `0${secs}`;

//     const output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     // const binedRender = this.render.bind(this);
//     // this.timer = setInterval(binedRender, 1000);
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// const clock = new Clocks({ template: 'h:m:s' });
// clock.start();

/**
 *
 */
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// const rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
// alert(rabbit.name);

/**
 *
 */
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     const date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = `0${hours}`;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = `0${mins}`;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = `0${secs}`;

//     const output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

/**
 *
 */
// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// const rabbit = new Rabbit('Кроль');

// console.log( rabbit.hasOwnProperty('name') ); // Ошибка
