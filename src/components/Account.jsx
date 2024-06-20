const Account = ({ title, amount, Description, viewTransactions }) => {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{Description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" href={viewTransactions}>
          View transactions
        </button>
      </div>
    </div>
  )
}

export default Account
