import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Connect from './components/Connect';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} /> 
        <Route exact path='/explore' element={<Explore/>} /> 
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/connect' element={<Connect/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>  
    </div> 
    </Router>

  );
}

export default App;
