import './App.css';

// routers
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// components
import ClickCounter from './topics/hooks/useState/ClickCounter';
import PropsManagement from './topics/props management/from a component to another/parent to child/PropsManagement';
import WritenMessage from './topics/hooks/useState/WritenMessage';
import ItemDisplay from './topics/component lifecycle/lists/ItemDisplay';
import Form from './topics/props management/onChange/Form';
import BornComponent from './topics/hooks/useEffect/BornComponent';
import Clock from './topics/hooks/useEffect/Clock';
import MousePosition from './topics/hooks/useEffect/MousePosition';
import FetchData from './topics/component lifecycle/fetch data/FetchData';
import MemoHook from './topics/hooks/useMemo/MemoHook';
import GitHubAccount from './topics/hooks/custom hooks/GitHubAccount';
import Parent from './topics/props management/from a component to another/child to parent/Parent';

// inside the 'return' you have to store all the components you'll going to need
//* you also need to wrap the entire program within 'messageContext' and add the property 'Provider in the open tag
function App() {

  return (
      <>
        <div className='Main'>
          <h1> This Reac App is an example of how React works </h1>

          <BrowserRouter>

              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clickcounter">Click Counter</Link></li>
                <li><Link to="/propsmanagement">Props Management</Link></li>
                <li><Link to="/writenmessage">Writen Message</Link></li>
                <li><Link to="/itemdisplay">Item Display</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/borncomponent">Born Component</Link></li>
                <li><Link to="/clock">Clock</Link></li>
                <li><Link to="/mouseposition">Mouse Position</Link></li>
                <li><Link to="/fetchdata">Fetch Data</Link></li>
                <li><Link to="/memohook">Memo Hook</Link></li>
                <li><Link to="/githubaccount">GitHub Account</Link></li>
                <li><Link to="/parent">Parent</Link></li>
              </ul>

              <Routes>
                <Route path="/"></Route>
                <Route path="/clickcounter" element={<ClickCounter />}></Route>
                <Route path="/propsmanagement" element={<PropsManagement valueSent="Heyyy!!!" />}></Route>
                <Route path="/writenmessage" element={<WritenMessage />}></Route>
                <Route path="/itemdisplay" element={<ItemDisplay />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/borncomponent" element={<BornComponent />}></Route>
                <Route path="/clock" element={<Clock />}></Route>
                <Route path="/mouseposition" element={<MousePosition />}></Route>
                <Route path="/fetchdata" element={<FetchData />}></Route>
                <Route path="/memohook" element={<MemoHook />}></Route>
                <Route path="/githubaccount" element={<GitHubAccount />}></Route>
                <Route path="/parent" element={<Parent />}></Route> 
              </Routes>

          </BrowserRouter>

        </div>
      </>
  
  )
}

export default App;
