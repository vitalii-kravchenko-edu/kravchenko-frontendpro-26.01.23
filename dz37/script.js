// 1. Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// 2. Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// 3. Зробити завдання використовуючи проміси, перехопити помилки.

function getPostById(id) {
  return new Promise((resolve, reject) => {
    if (id < 1 || id > 100) {
      reject(new Error('Неприпустиме значення id'));
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка запиту до сервера');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function displayPost(post) {
  const postContainer = document.createElement('div');
  const postTitle = document.createElement('h2');
  const postBody = document.createElement('p');
  const commentsButton = document.createElement('button');

  postTitle.textContent = post.title;
  postBody.textContent = post.body;
  commentsButton.textContent = 'Отримати коментарі';

  commentsButton.addEventListener('click', () => {
    getCommentsByPostId(post.id)
      .then(comments => {
        displayComments(comments);
      })
      .catch(error => {
        console.error(error);
      });
  });

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  postContainer.appendChild(commentsButton);

  document.body.appendChild(postContainer);
}

function getCommentsByPostId(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка запиту до сервера');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function displayComments(comments) {
  const commentsContainer = document.createElement('div');

  comments.forEach(comment => {
    const commentName = document.createElement('h4');
    const commentEmail = document.createElement('p');
    const commentBody = document.createElement('p');

    commentName.textContent = comment.name;
    commentEmail.textContent = comment.email;
    commentBody.textContent = comment.body;

    commentsContainer.appendChild(commentName);
    commentsContainer.appendChild(commentEmail);
    commentsContainer.appendChild(commentBody);
  });

  document.body.appendChild(commentsContainer);
}

const idInput = document.getElementById('idInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const id = parseInt(idInput.value);

  getPostById(id)
    .then(post => {
      displayPost(post);
    })
    .catch(error => {
      console.error(error);
    });
});
