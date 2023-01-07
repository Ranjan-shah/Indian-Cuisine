
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Contact from './routes/Contact';
import logo from './assets/logo.png';
import './routes/rotstyle.css';
import Footer from "./footer";
function App() {
  return (
    <Router>
    <div className="App">
    
      <div className='header'>
        <div >
          <img src={logo} alt="hello" className='image'/>
        </div>
        <ul>
      <Link to="/home">Home</Link>
      <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </ul>
      </div>
      <Routes>
      <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
    
    </Router>
    
  );
}

export default App;
