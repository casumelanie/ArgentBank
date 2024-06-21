import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectToken } from './authSlice'
import { Outlet } from 'react-router-dom'

const RequireAuth = () => {
  const token = useSelector(selectToken)
  const location = useLocation()

  return token ? (
    // renvoie vers /user
    <Outlet />
  ) : (
    // renvoie vers la page de connexion pour inviter l'utilisateur à se connecter
    <Navigate to="/sign-in" state={{ from: location }} replace />
  )
}

export default RequireAuth
