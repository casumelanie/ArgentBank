import Account from '../components/Account.jsx'
import { postUser } from '../app/api.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../app/authSlice.js'
import { selectUser, setData } from '../app/userSlice.js'

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
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  setTimeout(() => {
    {
      token !== null
        ? postUser(token).then((data) => {
            console.log(data)
            const user = {
              userName: data.userName,
              firstName: data.firstName,
              lastName: data.lastName,
            }
            dispatch(setData(user))
          })
        : null
    }
  }, 1000)

  return (
    <section id="user" className="bg-dark">
      <div className="header">
        <h2>
          Welcome back
          <br />
          {user.userName} {user.firstName} {user.lastName}
        </h2>
        <button className="edit-button">Edit Name</button>
        <h2 className="sr-only">Accounts</h2>
      </div>
      <div className="accounts">
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
