const link = document.querySelector('.link');
link.setAttribute('data-special', 'Special Link');

const element = document.createElement('span');
element.classList.add('first', 'new');
element.textContent = 'The first new element';

const element2 = document.createElement('h3');
element2.insertAdjacentHTML('afterbegin', '<span>Article</span>');

const content = document.querySelector('.content');
content.insertAdjacentElement('afterbegin', element2);
content.appendChild(element);

const fragment = document.createDocumentFragment();
const states = ['orange', 'green', 'blue'];
states.forEach((color) => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.textContent = color;
  item.style.color = color;
  item.style.marginRight = '10px';
  fragment.appendChild(item);
});
const colors = document.createElement('div');
colors.style.display = 'flex';
colors.appendChild(fragment);

content.insertAdjacentElement('beforeend', colors);

element2.remove();

link.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('h1').style.color = 'green';
});

const button = document.createElement('button');
button.textContent = 'Click Me';
content.insertAdjacentElement('afterend', button);

const container = document.createElement('div');
button.insertAdjacentElement('afterend', container);
button.addEventListener('click', () => {
  document.querySelector('h1').style.color = 'orange';

  const message = document.createElement('p');
  const closer = document.createElement('button');
  message.textContent = Math.random();
  closer.textContent = 'delete';
  message.appendChild(closer);
  container.appendChild(message);
});
container.addEventListener('click', (e) => {
  //   console.log(e.target);
  if (e.target.tagName == 'BUTTON') {
    e.target.parentElement.remove();
  }
});
