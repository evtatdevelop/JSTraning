// class ExtendedClock extends Clock {
//   constructor( options ) {
//     super( options );
//     const { precision = 1000 } = options;
//     console.log(precision);
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// const extendClock = new ExtendedClock({ template: 'h:m:s', precision: 3000 });
// extendClock.start();
