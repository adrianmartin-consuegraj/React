import { useSelector, useDispatch } from "react-redux"

const DepositPage = () => {

  const balance = useSelector(state => state.balanceReducer.balance)
  const dispatch = useDispatch()

  const withdrawHandle = () => {
    dispatch({type:"WITHDRAW", payload:10})
  }

  return (
    <>
      <p>Balance: €{balance}</p>
      <button onClick={withdrawHandle}>Reduce €10</button>
    </>
  )
}

export default DepositPage