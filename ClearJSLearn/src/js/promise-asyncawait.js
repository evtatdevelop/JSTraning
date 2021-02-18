'use strict';

console.log('Prpmises async/await 🎊');

// function loadScript(src) {
//   const script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
// }
// loadScript('./js/classes.js');

/**
 *
 */
// function showCircle(cx, cy, radius, callback) {
//   const div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = `${cx}px`;
//   div.style.top = `${cy}px`;
//   div.className = 'circle';
//   document.body.append(div);

//   setTimeout(() => {
//     div.style.width = `${radius * 2}px`;
//     div.style.height = `${radius * 2}px`;

//     div.addEventListener('transitionend', function handler() {
//       div.removeEventListener('transitionend', handler);
//       callback(div);
//     });
//   }, 0);
// }

// showCircle(150, 200, 100, (div) => {
//   div.classList.add('message-ball');
//   div.append('Hello');
// });

/**
 *
 */
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

/**
 *
 */
// function showCircle(cx, cy, radius) {
//   const div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = `${cx}px`;
//   div.style.top = `${cy}px`;
//   div.className = 'circle';
//   document.body.append(div);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = `${radius * 2}px`;
//       div.style.height = `${radius * 2}px`;

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }

// showCircle(150, 150, 100).then((div) => {
//   div.classList.add('message-ball');
//   div.append('Hello, world!');
// });

/**
 *
 */
// function loadJson(url) {
//   return fetch(url)
//     .then((response) => response.json());
// }

// function loadGithubUser(name) {
//   return fetch(`https://api.github.com/users/${name}`)
//     .then((response) => response.json());
// }

// function showAvatar(githubUser) {
//   // console.log(githubUser);
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// // Используем их:
// loadJson('./js/user.json')
//   .then((user) => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then((githubUser) => console.log(`Показ аватара ${githubUser.name} завершён`));

/**
 *
 */
// async function showAvatar() {
//   // запрашиваем JSON с данными пользователя
//   const response = await fetch('./js/user.json');
//   const user = await response.json();

//   // запрашиваем информацию об этом пользователе из github
//   const githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   const githubUser = await githubResponse.json();

//   // отображаем аватар пользователя
//   const img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);

//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

/**
 *
 */
// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status === 200) {
//     const json = await response.json();
//     return json;
//   }
//   throw new Error(response.status);
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

/**
 *
 */
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status === 200) {
//     const json = await response.json();
//     return json;
//   }
//   throw new HttpError(response);
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   let user;
//   while (true) {
//     const name = prompt('Введите логин?', 'iliakan');
//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break;
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status === 404) {
//         alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//       } else {
//         throw err;
//       }
//     }
//   }

//   alert(`Полное имя: ${user.name}.`);
//   return user;
// }

// demoGithubUser();

/**
 *
 */
// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait()
//     .then((resolve) => alert(resolve));
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }
// f();
