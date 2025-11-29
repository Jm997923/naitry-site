import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import PookiePage from './pages/Pookie';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav className='navbar'>
          <Link to="/">Home</Link> |{" "}
          <Link to="/pookie">Pookie</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pookie" element={<PookiePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
