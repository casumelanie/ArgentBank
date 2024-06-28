import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { postLogin } from '../app/api'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/authSlice'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const form = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Fonction connexion
  const submitForm = async (e) => {
    e.preventDefault()
    const user = {
      email: form.current[0].value,
      password: form.current[1].value,
    }

    postLogin(user).then((data) => {
      // Mise à jour du state, intégration du token
      dispatch(setToken(data.body.token))
      // Redirection vers le page utilisateur
      navigate('/user')
    })
  }

  return (
    <section id="login" className="bg-dark">
      <div className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faCircleUser} />
        <h2>Sign In</h2>
        <form ref={form} onSubmit={(e) => submitForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}

export default LogIn
