'use strict';

console.log('Network requests 🎇');

// async function LastCommit() {
//   const url = 'https://github.com/evtatdevelop/htmlCV/commits/main';
//   const response = await fetch(url);
//   const commits = await response.json(); // читаем ответ в формате JSON
//   console.log(commits[0].author.login);
// }
// LastCommit();

// async function getUsers(users) {
//   const result = [];
//   try {
//     users.forEach(async (login) => {
//       const response = await fetch(`https://api.github.com/users/${login}`);
//       if (response.ok) {
//         const data = await response.json();
//         result.push(data);
//       } else {
//         result.push(null);
//       }
//     });
//   } catch (err) {
//     return null;
//   }
//   return result;
// }

// async function getUsers(names) {
//   const jobs = [];

//   for (const name of names) {
//     const job = fetch(`https://api.github.com/users/${name}`)
//       .then(
//         (successResponse) => {
//           if (successResponse.status !== 200) return null;
//           return successResponse.json();
//         },
//         (failResponse) => null,
//       );
//     jobs.push(job);
//   }
//   const results = await Promise.all(jobs);
//   return results;
// }

// async function getUsers(names) {
//   const promises = names.map(async (login) => {
//     try {
//       const response = await fetch(`https://api.github.com/users/${login}`);
//       return (response.ok) ? response.json() : null;
//     } catch (e) {
//       return null;
//     }
//   });
//   return Promise.all(promises);
// }

// const users = getUsers(['iliakan', 'remy', 'no.such.users', 'evtatdevelop']);
// console.log(users);
