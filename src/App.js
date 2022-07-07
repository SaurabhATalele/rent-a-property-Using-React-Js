// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        

    </Routes>
    </div>
  );
}

export default App;
