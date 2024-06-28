import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { selectToken } from '../app/authSlice'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/authSlice'
import { setData } from '../app/userSlice'
import { selectUser } from '../app/userSlice'

const Header = ({ logo }) => {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Fonction déconnexion
  const logOut = () => {
    dispatch(setToken(null))
    dispatch(setData(null))
    navigate('/')
  }
  return (
    <header id="header">
      <h1 className="sr-only">Argent Bank</h1>
      <Link to="/">
        <img className="logo" src={logo}></img>
      </Link>
      {token !== null ? (
        <div className="links">
          <Link to="/user" className="link-w-icon">
            <FontAwesomeIcon icon={faCircleUser} />
            {user?.userName}
          </Link>
          <Link to="/" className="link-w-icon" onClick={(e) => logOut(e)}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        </div>
      ) : (
        <Link to="/sign-in" className="link-w-icon">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      )}
    </header>
  )
}

export default Header
