import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import GlobalCurriculum from './pages/GlobalCurriculum';
import CampusLife from './pages/CampusLife';
import Admission from './pages/Admission';
import Innovation from './pages/Innovation';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/global-curriculum" element={<GlobalCurriculum />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;