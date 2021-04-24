'use strict';

console.log('Animation 🎭');

/**
 *
 */
// const picture = document.createElement('img');
// picture.src = 'img/gallery/y9luocwa.bmp';
// picture.style.cssText = `
// cursor: pointer;
// `;
// picture.style.width = '40px';
// picture.style.height = 'auto';
// // picture.style.transition = 'width 3s';
// picture.style.transition = 'width 3s cubic-bezier(.25, 1, .5, 1.3)';
// document.querySelector('.app').append(picture);

// picture.onclick = function () {
//   this.click = null;
//   picture.style.width = '400px';
//   picture.ontransitionend = function () {
//     alert('Animation id Done !');
//   };
// };

/**
 *
 */
// function showCircle(cx, cy, radius) {
//   const circle = document.createElement('div');
//   circle.style.cssText = `
//     position: absolute;
//     border-radius: 50%;
//     border: 2px solid green;
//     background-color: lime;
//     width: 0px;
//     height: 0px;
//     transition: all 3s;
//   `;
//   document.body.append(circle);
//   circle.style.top = `${cy}px`;
//   circle.style.left = `${cx}px`;
//   setTimeout(() => {
//     circle.style.width = `${radius}px`;
//     circle.style.height = `${radius}px`;
//   });
// }
// showCircle(200, 200, 150);

/**
 * 
 */
const animationBox = document.createElement('div');
animationBox.style.position = 'relative';
const ball = document.createElement('img');
animationBox.append(ball);
ball.src = 'img/svg/ball.svg';
ball.style.position = 'absolute';
document.body.append(animationBox);

function animate(options) {
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    // текущее состояние анимации
    var progress = options.timing(timeFraction)    
    options.draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

let bounceEaseOut = makeEaseOut(bounce);

ball.onclick = function() {
  animate({
    duration: 3000,
    timing: bounceEaseOut,
    draw: function(progress) {
      ball.style.top = progress * 400 + 'px';
    }
  });
};