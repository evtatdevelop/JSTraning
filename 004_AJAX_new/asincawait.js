// function getPost(id) {
//   return Promise.resolve().then(() => {
//     const [usertype, userId] = id.split('-');
//     return fetch(
//       `https://jsonplaceholder.typicode.com/posts/${userId}`
//     ).then((response) => response.json());
//   });
// }

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then(result => result.json());
    // const data = await response.json();
    // return data;
    return response;

  } catch (error) {
    console.error(error)
    return Promise.reject(error);
  }

}
getPost(79)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
