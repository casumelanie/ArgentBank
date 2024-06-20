import Account from '../components/Account.jsx'

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
  return (
    <section id="user" className="bg-dark">
      <div className="header">
        <h2>
          Welcome back
          <br />
          Tony Jarvis!
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
