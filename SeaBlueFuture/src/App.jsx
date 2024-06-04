import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Noticias from './pages/Noticias/Noticias';
import Doacoes from './pages/Doacoes/Doacoes';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      <Footer/>
    </Router>

  );
};

export default App;

