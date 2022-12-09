import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {

  const balance = useSelector(state => state.balanceReducer.balance)
  const loan = useSelector(state => state.loanReducer.loan)

  const dispatch = useDispatch()

  const applyLoanHandle = () => {
    dispatch({type:"APPLY"})
  }

  return (
    <>
    
      <p>Balance: €{balance}</p>
      
      <button onClick={applyLoanHandle} disabled={loan ? true : false}>{loan ? "Loan applied" : "Apply for loan"}</button>
    </>
  )
}

export default HomePage