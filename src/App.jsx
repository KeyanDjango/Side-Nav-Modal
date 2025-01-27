import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavigationSideScrollBar from './NavigationSideBar/NavigationSide';
import About from './Pages/About';
import Contact from './Pages/Contact';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationSideScrollBar />
        <div style={{marginLeft:250}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}