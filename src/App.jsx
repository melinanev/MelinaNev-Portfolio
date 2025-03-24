import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import './assets/css/styles.css'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode class to body when component mounts
    document.body.classList.add(darkMode ? 'dark' : 'light');
    return () => {
      // Clean up when component unmounts
      document.body.classList.remove(darkMode ? 'dark' : 'light');
    };
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };

  return (
    <Router>
      <div className={darkMode ? 'dark' : 'light'}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
