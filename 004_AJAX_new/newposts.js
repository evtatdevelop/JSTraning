async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((result) => result.json());

    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

async function getPostComents(post) {
  try {
    const { id } = post;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    ).then((result) => result.json());

    return { post: post, comments: response };
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

async function getPostUser(data) {
  const {
    post: { userId },
  } = data;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((result) => result.json());

    return { ...data, user: response };
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

// getPost(23)
//   .then((post) => getPostComents(post))
//   .then((data) => getPostUser(data))
//   .then((fullData) => console.log(fullData));

const app = document.querySelector(".app");
const buttonGet = document.createElement("button");
const ul = document.createElement("ul");
ul.classList.add("postList");
buttonGet.addEventListener("click", onButtonGetClick);
buttonGet.textContent = "Get posts";
app.insertAdjacentElement("afterbegin", buttonGet);
app.appendChild(ul);

async function onButtonGetClick() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    ).then((result) => result.json());

    await response.forEach((element) => {
      getPost(element.id)
        .then((post) => getPostComents(post))
        .then((data) => getPostUser(data))
        .then((fullData) => {
          const post = renderPost(fullData);
          ul.appendChild(post);
        });
    });
    app.appendChild(ul);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

/**
 *
 * @param {*} post
 */
function renderPost(data) {
  const { post, comments, user } = data;
  const li = document.createElement("li");
  const title = document.createElement("h3");
  const body = document.createElement("p");
  const userName = document.createElement("p");

  li.classList.add("post");
  title.classList.add("title");
  body.classList.add("body");
  userName.classList.add("uaser-name");

  title.textContent = post.title;
  body.textContent = post.body;
  userName.textContent = user.name;
  li.setAttribute("data-id", post.id);

  li.appendChild(title);
  li.appendChild(body);
  li.append(userName);

  const comentsBox = renderComents(comments);
  li.append(comentsBox);

  return li;
}

function renderComents(comments) {
  const comentsUl = document.createElement("ul");
  comentsUl.classList.add("coments-box");
  comments.forEach((comment) => {
    const comentsLi = document.createElement("li");
    comentsLi.textContent = comment.name;
    comentsUl.append(comentsLi);
  });
  return comentsUl;
}
