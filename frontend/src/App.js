import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePageAccenture from './pages/HomePageAccenture';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import AITransformationPage from './pages/AITransformationPage';
import GCCPage from './pages/GCCPage';
import ContactPage from './pages/ContactPage';
import { Analytics } from './components/Analytics';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Analytics />
          <Routes>
            <Route path="/" element={<HomePageAccenture />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/ai-transformation" element={<AITransformationPage />} />
            <Route path="/gcc" element={<GCCPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;