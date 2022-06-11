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
import Quiz from './components/Quiz';

function App() {

  return (
    <Router>
    <div className="App">
    <ul className="squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} /> 
        <Route exact path='/explore' element={<Explore/>} /> 
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/connect' element={<Connect/>} />
        <Route exact path='/quiz' element={<Quiz/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>  
    </div> 
    </Router>

  );
}

export default App;
