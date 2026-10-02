import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTopButton, { ScrollToTopOnNavigate } from './components/ScrollToTop/ScrollToTop';
import Toast from './components/Toast/Toast';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Mission from './pages/Mission/Mission';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery';
import Join from './pages/Join/Join';

export default function App() {
  const [toastMsg, setToastMsg] = useState('');
  const [toastTimer, setToastTimer] = useState(null);

  const showToast = (msg) => {
    if (toastTimer) clearTimeout(toastTimer);
    setToastMsg(msg);
    const timer = setTimeout(() => {
      setToastMsg('');
    }, 2300);
    setToastTimer(timer);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTopOnNavigate />
      <Navbar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home onShowToast={showToast} />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
      <ScrollToTopButton />
      <Toast message={toastMsg} />
    </div>
  );
}
