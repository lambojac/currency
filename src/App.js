import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from '../src/pages/About';
import Shop from '../src/pages/Shop';
import Faqs from '../src/pages/Faqs';
import Home from '../src/pages/Home'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
};

export default App;
