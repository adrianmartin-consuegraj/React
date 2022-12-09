import './App.scss'

// BrowserRouter, Routes, Route, NavLink
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';


function App() {
  return (
    <BrowserRouter>
      <div className='App-header'>
        
        <menu className='ul-style'>
          <li className='li-style'>
            <Link to="/" className="App-link">Home</Link>
          </li>
          <li className='li-style'>
            <NavLink to="/deposit" className="App-link"> Deposit </NavLink>
          </li>
          <li className='li-style'>
            <NavLink to="/withdraw" className="App-link"> Withdraw </NavLink>
          </li>
        </menu>

        <Routes>
          <Route path='/' activeClassName="active" exact element={<HomePage />} />
          <Route path='/deposit' exact element={<DepositPage />} />
          <Route path='/withdraw' exact element={<WithdrawPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
