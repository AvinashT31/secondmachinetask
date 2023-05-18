import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Task from './Component/Task';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        {/* <Route exact path = '/' element={<Home/>}></Route> */}
        <Route exact path='/task' element={<Task/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
