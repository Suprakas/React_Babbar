import './App.css';
import {NavLink, Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import About from './components/About';
import Support from './components/Support';
import { Link } from 'react-router-dom';
import Mainheader from './components/Mainheader';


function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/support">Support</NavLink>
          </li>

          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>

          <li> 
            <NavLink to="/about">About</NavLink>
          </li>
            
        </ul>
      </nav>

        <Routes>
          <Route path="/" element={<Mainheader/>}>
             {/* default route */}
           <Route index element={<Home/>}></Route>
           <Route path="/support" element={<Support/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/labs" element={<Labs/>}></Route>
           <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
