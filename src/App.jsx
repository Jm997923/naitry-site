import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Pookie from './pages/Pookie';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <header>
          <div className='navbar'>
            <img className="header-image" src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}/>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/pookie">Pookie</Link>
            </nav>
          </div>
        </header>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pookie" element={<Pookie />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
