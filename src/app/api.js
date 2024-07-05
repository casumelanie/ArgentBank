// URLS API
const URL_LOGIN = 'http://localhost:3001/api/v1/user/login'
const URL_USER = 'http://localhost:3001/api/v1/user/profile'

// FONCTION DE CONNEXION UTILISATEUR
export const postLogin = (userLogin) => {
  return fetch(URL_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}

// FONCTION DE RECUPÉRATION DONNÉES UTILISATEUR
export const postUser = (token) => {
  return fetch(URL_USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}

// FONCTION ENVOI NOUVEAU USERNAME
export const putUserName = (token, userName) => {
  return fetch(URL_USER, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))

    .catch((error) => {
      throw error
    })
}
