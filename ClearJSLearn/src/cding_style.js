console.log('Coding Style✨');

/**
 * https://learn.javascript.ru/coding-style
 */
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) { result *= x; }
  return result;
}

const x = prompt('x?', ''); const
  n = prompt('n?', '');
if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert(pow(x, n));
}
