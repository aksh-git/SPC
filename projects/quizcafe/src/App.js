import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} /> 
      </Routes>  
    </div> 
    </Router>
    
  );
}

export default App;
