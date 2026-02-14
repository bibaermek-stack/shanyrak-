import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail';
import './i18n/config';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/:id" element={<ClubDetail />} />
            <Route path="/calendar" element={<div className="container mx-auto px-4 py-12 text-center text-text-primary"><h1 className="text-4xl font-heading text-accent">Күнтізбе - жасалуда</h1></div>} />
            <Route path="/media" element={<div className="container mx-auto px-4 py-12 text-center text-text-primary"><h1 className="text-4xl font-heading text-accent">Медиа - жасалуда</h1></div>} />
            <Route path="/contact" element={<div className="container mx-auto px-4 py-12 text-center text-text-primary"><h1 className="text-4xl font-heading text-accent">Байланыс - жасалуда</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
