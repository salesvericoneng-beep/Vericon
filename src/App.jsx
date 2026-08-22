import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MechanicalSolutions from './pages/MechanicalSolutions';
import HvacSolutions from './pages/HvacSolutions';
import FireFightingSolutions from './pages/FireFightingSolutions';
import ElectricalSolutions from './pages/ElectricalSolutions';
import PheSolutions from './pages/PheSolutions';
import AmcSolutions from './pages/AmcSolutions';
import RetrofitSolutions from './pages/RetrofitSolutions';
import EnergyOptimizationSolutions from './pages/EnergyOptimizationSolutions';
import WhyVericon from './pages/WhyVericon';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mechanical" element={<MechanicalSolutions />} />
            <Route path="/services/hvac" element={<HvacSolutions />} />
            <Route path="/services/fire" element={<FireFightingSolutions />} />
            <Route path="/services/electrical" element={<ElectricalSolutions />} />
            <Route path="/services/phe" element={<PheSolutions />} />
            <Route path="/services/amc" element={<AmcSolutions />} />
            <Route path="/services/retrofit" element={<RetrofitSolutions />} />
            <Route path="/services/energy-optimization" element={<EnergyOptimizationSolutions />} />
            <Route path="/why-vericon" element={<WhyVericon />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
