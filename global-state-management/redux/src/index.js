import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

// 1. with 'createStore' you can store the data in a local variable
import { createStore, combineReducers, applyMiddleware } from 'redux'
// 2. we need to import this component, because this component has the initial variables and the method, which is basically the logic of the component
import balanceReducer from './store/balanceReducer'
import loanReducer from './store/loanReducer'
// 3. you also need to wrap the <App /> component to be able to provide the data to the entire application:
//'Provider' allows us to do this and we can store in a parameter called 'store' the variable we've created outside the root, called as well 'store' (line 15) where the component 'Reducer' is store (because all the information and logic is inside that component)
import { Provider } from 'react-redux'
// 6. we need to import thunk for data fetching.
import thunk from 'redux-thunk'

// 4. (only one reducer) Using 'createStore', we store the 'Reducer' component inside of a variable called 'store'
// const store = createStore(balanceReducer)

//* (+) 4. when you need to manage more reducers then you need to use combineReducers
const store = createStore(combineReducers({
    balanceReducer,
    loanReducer
}), applyMiddleware(thunk))

// 5. we need to wrap the '<App />' component and set what's going to be the local variable ('store' in this case)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)