/**
 * Theory
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(Math.random()), 3000);
// });
// console.log(promise);
// promise
//   .then((x) => {
//     console.log(x);
//     return x;
//   })
//   .then((y) => setTimeout(() => console.log(y * 2), 2000))
//   .catch((err) => console.error(err));

const http = customHttp();
/**
 *
 */
function customHttp() {
  return {
    get(url, callBack) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            callBack(`Error. Status: ${xhr.status}`, xhr);
            return;
          }
          response = JSON.parse(xhr.responseText);
          callBack(null, response);
        });
        xhr.addEventListener('error', () => {
          callBack(`Error. Status: ${xhr.status}`, xhr);
        });
        xhr.send();
      } catch (error) {
        callBack(error);
      }
    },
    post(url, body, headers, callBack) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            callBack(`Error. Status: ${xhr.status}`, xhr);
            return;
          }
          response = JSON.parse(xhr.responseText);
          callBack(null, response);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.addEventListener('error', () => {
          callBack(`Error. Status: ${xhr.status}`, xhr);
        });

        xhr.send(JSON.stringify(body));
      } catch (error) {
        callBack(error);
      }
    },
  };
}

function getPost(id) {
  return new Promise((resolve, reject) => {
    http.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, resp) => {
        if (err) {
          return reject(err);
        }
        resolve(resp);
      }
    );
  });
}

function getPostComents(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    http.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, resp) => {
        if (err) {
          return reject(err);
        }
        resolve({
          post,
          comments: resp,
        });
      }
    );
  });
}

function getPostUser(data) {
  const {
    post: { userId },
  } = data;
  return new Promise((resolve, reject) => {
    http.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, resp) => {
        if (err) {
          return reject(err);
        }
        resolve({ ...data, user: resp });
      }
    );
  });
}

getPost(2)
  .then((post) => getPostComents(post))
  .then((data) => getPostUser(data))
  .then((fullData) => console.log(fullData))
  .catch((err) => console.error(err))
  .finally(() => console.log('finally'));

/**
 * Promise.all
 * */
function getPost_1(id) {
  return new Promise((resolve, reject) => {
    http.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, resp) => {
        if (err) {
          return reject(err);
        }
        resolve(resp);
      }
    );
  });
}

function getPostComents_1(postId) {
  return new Promise((resolve, reject) => {
    http.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      (err, resp) => {
        if (err) {
          return reject(err);
        }
        resolve(resp);
      }
    );
  });
}

function getPostUser_1(userId) {
  return new Promise((resolve, reject) => {
    http.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, resp) => {
        if (err) {
          return reject(err);
        }
        resolve(resp);
      }
    );
  });
}

Promise.all([getPost_1(1), getPostComents_1(1), getPostUser_1(1)])
  .then(([post, comments, user]) => console.log(post, comments, user))
  .catch((err) => console.error(err));
