/**
 * Theory
 */

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((posts) => console.log(posts))
//   .catch((error) => console.error(error));

/**
 *
 * @param {*} id
 */
function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}
// getPost(1).then((post) => console.log(post));

/**
 * the same
 **/
function getPost_1(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());
}
// getPost_1(1)
//   .then((post) => console.log(post))
//   .catch((err) => console.error(err));

/**
 * the same
 **/
function getPost_2(id) {
  return Promise.resolve().then(() => {
    const [usertype, userId] = id.split('-');
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    ).then((response) => response.json());
  });
}
// getPost_2(1)
getPost_2('user-1')
  .then((post) => console.log(post))
  .catch((err) => console.error(err));
