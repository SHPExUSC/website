import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './comp/NavBar';
import Footer from './comp/Footer';
import Home from './comp/pages/Home';
import AboutUs from './comp/pages/AboutUs';
import Calendar from './comp/pages/Calendar';
import Gallery from './comp/pages/Gallery';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/website' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus' element={<Calendar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;