import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="main-container error-container">
          <span className="error-type">404</span>
          <span className="error-description">Oups! La page que vous demandez n'existe pas.</span>
          <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
        </div>
      )
}

export default Error404
