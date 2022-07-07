// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Navbar';
import Pune from './components/Pune';
import Mumbai from './components/Mumbai';
import Hyderabad from './components/Hyderabad';
import Bangalore from './components/Bangalore';
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
        <Route path="/pune" element={<Pune/>}/>
        <Route path="/mumbai" element={<Mumbai/>}/>
        <Route path="/Hyderabad" element={<Hyderabad/>}/>
        <Route path="/Bangalore" element={<Bangalore/>}/>

    </Routes>
    </div>
  );
}

export default App;
