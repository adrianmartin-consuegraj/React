//* this is basically the same as Redux or useReducer + useContex
// you have to install the dependencies: npm install mobx & npm install mobx-react-lite
//! THIS SHOULD WORK BUT IS NOT WORKING: it seems it's because of 'useObservable' is not well imported or should be changed it for something else
import { observer, useObservable } from 'mobx-react-lite'

import './App.css'

// we need to turn this App function into an arrow function
const App = observer( () => {

  const store = useObservable({
    count: 1,
    addOne(){
      store.count++
    },
    subtractOne(){
      store.count--
    }
  })

  const addOneHandle = () =>{
    store.addOne()
  }

  const subtractOneHandle = () =>{
    store.subtractOne()
  }

  return (
    <>
      <div className="App">

        <h1>Count: {store.count}</h1>
        <button onClick={addOneHandle}>Add One</button>
        <button onClick={subtractOneHandle}>Subtract One</button>

      </div>
    </>
  );
})

export default App;
