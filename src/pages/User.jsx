import Account from '../components/Account.jsx'
import { postUser } from '../app/api.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../app/authSlice.js'
import { selectUser, setData } from '../app/userSlice.js'
import { useEffect, useRef } from 'react'
import { putUserName } from '../app/api.js'

const accounts = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    amountDescription: 'Available Balance',
    viewTransactions: '#',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    amountDescription: 'Available Balance',
    viewTransactions: '#',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    amountDescription: 'Current Balance',
    viewTransactions: '#',
  },
]

const User = () => {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const buttonEdit = document.querySelector('.edit-button')
  const formEdit = document.getElementById('changeUserData')
  const form = useRef()

  // Récupération des datas au chargement de la page
  useEffect(() => {
    postUser(token).then((data) => dispatch(setData(data.body)))
  }, [dispatch, token])

  // Fonction affichage du formulaire
  const viewForm = () => {
    formEdit.classList.remove('hidden')
    buttonEdit.classList.add('hidden')
  }

  // Fonction fermeture du formulaire
  const closeForm = () => {
    formEdit.classList.add('hidden')
    buttonEdit.classList.remove('hidden')
  }

  // Fonction au submit du formulaire
  const changeUsername = (e) => {
    e.preventDefault()
    // Envoie data nouveau userName
    putUserName(token, form.current[0].value)
    // Récupération auprès de l'API du nouveau userData 
    setTimeout(() => {
      postUser(token).then((data) => dispatch(setData(data.body)))
    }, 1000)
    // Fermeture du formulaire
    closeForm()
  }

  return (
    <section id="user" className="bg-dark">
      <div className="header">
        <h2>
          Welcome back
          <br />
          {user?.firstName} {user?.lastName} !
        </h2>
        <button className="edit-button" onClick={(e) => viewForm(e)}>
          Edit Name
        </button>

        <form
          id="changeUserData"
          className="hidden"
          ref={form}
          onSubmit={(e) => changeUsername(e)}
        >
          <div className="input-wrapper">
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" placeholder={user?.userName} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              disabled
              readOnly
              value={user?.firstName}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              disabled
              readOnly
              value={user?.lastName}
            />
          </div>
          <div className="input-wrapper">
            <button className="sign-in-button" type="submit">
              Save
            </button>
            <button
              className="sign-in-button"
              type="reset"
              onClick={(e) => closeForm(e)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="accounts">
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account) => (
          <Account
            key={account.title}
            title={account.title}
            amount={account.amount}
            Description={account.amountDescription}
            viewTransactions={account.viewTransactions}
          />
        ))}
      </div>
    </section>
  )
}

export default User
