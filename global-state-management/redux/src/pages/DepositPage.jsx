// 1. we need to import 'useSelector' in order to be able to manage the local variable
// 4. 'useDispatch' is used to modify the information inside the global varible from another component
import { useSelector, useDispatch } from 'react-redux'
// 8. we're importing the functions from 'balanceActions'
import * as balanceActions from './../actions/balanceActions'

const DepositPage = () => {

  // 2. we store the global variable (balance) into a local variable (const balance)
  const balance = useSelector(state => state.balanceReducer.balance)

  // 4b. we give the functionality of modify the global variable to a local variable called 'dispatch'
  const dispatch = useDispatch()

  // 10. we store the varibale loading in this component
  const loading = useSelector(state => state.balanceReducer.loading)
  
  //// (old way) 7. now we create the function where the 'dispatch' variable (step 5) the local variable is going to be modify by executing the Reducer Component's function
  // 9. updated way (using the functions from 'balanceActions')
  const depositHandle = () => {
    ////dispatch({type:"DEPOSIT", payload:10})
    dispatch(balanceActions.depositAsync())
  } 

  // 3. we print the variable ↓
  // 6. we create a button that uses a function when is clicked
  return (
    <>
      {loading ? <p>Saving . . .</p> : <p>Balance: €{balance}</p>}
      <button onClick={depositHandle}>Add €10</button>
    </>
  )
}

export default DepositPage