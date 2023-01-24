import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
