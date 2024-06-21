import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Header = ({ logo }) => {
  return (
    <header id="header">
      <h1 className="sr-only">Argent Bank</h1>

      <NavLink to="/">
        <img className="logo" src={logo}></img>
      </NavLink>

      <NavLink to="/sign-in" className="link-w-icon">
        <FontAwesomeIcon icon={faCircleUser} />
        Sign In
      </NavLink>
    </header>
  )
}

export default Header
