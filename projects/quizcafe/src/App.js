import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Connect from './pages/Connect';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import QuizPlay from './pages/QuizPlay';

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
        <Route exact path='/quizplay/:id' element={<QuizPlay />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>  
    </div> 
    </Router>

  );
}

export default App;
