// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// ✅ Correct CSS import (global stylesheet)
import './style.css';

// Components
import Modal from './components/Modal';
import Terminal from './components/Terminal';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [view, setView] = useState(null); // recruiter | terminal | null

  const handleRecruiterClick = () => {
    setView('recruiter');
    setShowModal(false);
  };

  const handleTerminalClick = () => {
    setView('terminal');
    setShowModal(false);
  };

  return (
    <>
      {/* Modal appears first */}
      <Modal isOpen={showModal}>
        <h2>Welcome to my Portfolio</h2>
        <p>Please choose your experience:</p>
        <div className="modal-buttons">
          <button onClick={handleRecruiterClick}>For Recruiters</button>
          <button onClick={handleTerminalClick}>For Developers</button>
        </div>
      </Modal>

      {/* Show developer terminal */}
      {!showModal && view === 'terminal' && <Terminal setView={setView} />}

      {/* Show recruiter normal site */}
      {!showModal && view === 'recruiter' && (
        <Router>
          <div className="App" id="scroll">
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
