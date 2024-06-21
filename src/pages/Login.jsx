import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { postLogin } from '../app/api'

const LogIn = () => {
  // Récupération des données et envoi du formulaire
  const form = useRef()
  const submitForm = async (e) => {
    e.preventDefault()
    let user = {
      email: form.current[0].value,
      password: form.current[1].value,
    }

    postLogin(user)
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
