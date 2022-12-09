//* global state management with useReducer + useContext (instead of doing it with Redux)
// you don't need to install any dependency
//! I HAVE TO CREATE ANOTHER COMPONENT AND USE useContext JUST TO TRY TO ACCESS TO ANOTHER COMPONENT'S VARIABLE (LIKE IT'S WORKING GLOBALLY)
import { useReducer } from 'react'
import './App.css';

const initState = {
  count: 0
}

const reducerFunction = (state, action) => {
  switch(action.type){
    case "INCREMENT":
      return {count: state.count+1}
    case "DECREMENT":
      return {count: state.count-1}
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducerFunction, initState)

  const plusOne = () =>{
    dispatch({type: "INCREMENT"})
  }

  const minusOne = () =>{
    dispatch({type: "DECREMENT"})
  }

  return (
    <>
      <div className="App">
        
        <h2>useReducer Example</h2>
        <h3>Count: {state.count}</h3>

        <button onClick={plusOne}>Plus One</button>
        <button onClick={minusOne}>Minus One</button>

      </div>
    </>
  );
}

export default App;
