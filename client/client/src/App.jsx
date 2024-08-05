import { useState } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';
import Sport from './views/Sport';
import Match from './views/Match';
// import { DeviceFrameset } from 'react-device-frameset';
// import 'react-device-frameset/styles/marvel-devices.min.css' 


function App() {

  return (
    <>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sport" element={<Sport />} />
        <Route path="/baseball/:id" element={<Match />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
