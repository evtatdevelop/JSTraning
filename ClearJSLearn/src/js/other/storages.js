'use strict';

console.log('Sorages 🎞');

/**
 * Local Sorage
 */
const textArea = document.createElement('textarea');
const userMsg = localStorage.getItem('userMsg');
if (userMsg) {
  textArea.value = userMsg;
}
textArea.setAttribute('placeholder', 'Your message');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.style.display = 'block';

document.querySelector('.app').append(textArea, clearButton);

textArea.addEventListener('input', () => {
  localStorage.setItem('userMsg', textArea.value);
});

clearButton.addEventListener('click', () => {
  textArea.value = '';
  localStorage.removeItem('userMsg');
});
