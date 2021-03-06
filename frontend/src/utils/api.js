export function getPosts () {
  return fetch(`http://localhost:3001/posts`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => res.json());
}

export function getPost (id) {
  return fetch(`http://localhost:3001/posts/${id}`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => {
      if (!res.ok)
        throw Error(res.statusText);
      return res.json();
    });
}

export function addPost (data) {
  return fetch(`http://localhost:3001/posts`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(res => res.json());
}

export function editPost (data) {
  return fetch(`http://localhost:3001/posts/${data.id}`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  })
    .then(res => res.json());
}


export function removePost (id) {
  return fetch(`http://localhost:3001/posts/${id}`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'DELETE'
  })
    .then(res => res.json());
}

export function getComments (id) {
  return fetch(`http://localhost:3001/posts/${id}/comments`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => res.json());
}

export function addComment (data) {
  return fetch(`http://localhost:3001/comments`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(res => res.json());
}

export function removeComment (id) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'DELETE'
  })
    .then(res => res.json());
}

export function editComment (data) {
  return fetch(`http://localhost:3001/comments/${data.id}`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  })
    .then(res => res.json());
}

export function vote (id, option, type) {
  return fetch(`http://localhost:3001/${type}/${id}`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ option })
  })
    .then(res => res.json());
}

export function getCategories () {
  return fetch(`http://localhost:3001/categories`, {
    headers: {
      'Authorization': 'let-me-in',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => res.json())
    .then(res => res.categories);
}