// URLS API
const URL_LOGIN = 'http://localhost:3001/api/v1/user/login'

export const POST_LOGIN = 'POST_LOGIN'

// METHODE CONNEXION
export const postLogin = (userLogin) => {
  fetch(URL_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin),
  })
    .then((response) => {
      response.json()
      console.log(response)
      // dispatch a rajouter a la suite pour stocker le token
    })
    .catch((error) => {
      throw error
    })
}
