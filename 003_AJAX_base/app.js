const app = document.querySelector('.app');
const buttonGet = document.createElement('button');
const buttonPost = document.createElement('button');
const ul = document.createElement('ul');
const myHttp = http();

ul.classList.add('postList');

buttonGet.addEventListener('click', onButtonGetClick);
buttonPost.addEventListener('click', onButtonPostClick);

buttonGet.textContent = 'Get posts';
buttonPost.textContent = 'Create post';
app.insertAdjacentElement('afterbegin', buttonPost);
app.insertAdjacentElement('afterbegin', buttonGet);
app.appendChild(ul);

/**
 * Get post
 */
function onButtonGetClick() {
  myHttp.get('https://jsonplaceholder.typicode.com/posts', (err, response) => {
    const ul = document.querySelector('.postList');
    response.forEach((element) => {
      const post = renderPost(element);
      ul.appendChild(post);
    });
    app.appendChild(ul);
    buttonGet.remove();
  });
}

/**
 * Add post
 */
function onButtonPostClick(body) {
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  myHttp.post(
    'https://jsonplaceholder.typicode.com/posts',
    newPost,
    {
      'Content-type': 'application/json; charset=UTF-8',
    },
    (err, response) => {
      const post = renderPost(response);
      const ul = document.querySelector('.postList');
      ul.insertAdjacentElement('afterbegin', post);
    }
  );
}

/**
 * AJAX reuests
 */
function http() {
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

/**
 *
 * @param {*} post
 */
function renderPost(post) {
  const li = document.createElement('li');
  const title = document.createElement('h3');
  const body = document.createElement('p');

  li.classList.add('post');
  title.classList.add('title');
  body.classList.add('body');

  title.textContent = post.title;
  body.textContent = post.body;
  li.setAttribute('data-id', post.id);

  li.appendChild(title);
  li.appendChild(body);

  return li;
}
