import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import Task from './Component/Task';
import Forgetpass from './Component/Forgetpass';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route exact path='/' element={<navbar/>}></Route> */}
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/task' element={<Task/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/forgetpassword' element={<Forgetpass/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
