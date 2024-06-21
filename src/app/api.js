// URLS API
const URL_LOGIN = 'http://localhost:3001/api/v1/user/login'

/*export const POST_LOGIN = 'POST_LOGIN'*/

// METHODE DE CONNEXION UTILISATEUR
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
