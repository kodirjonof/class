
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Header from './layout/header';
import Footer from './layout/footer';

import WOW from 'wowjs';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect } from 'react';



function App() {

  
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
