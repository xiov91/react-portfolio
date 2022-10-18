import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <div><Router>
    <Nav />
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  </Router>
    </div>
  );
}

export default App;
