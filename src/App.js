
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';

import WOW from 'wowjs';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect } from 'react';
import ContactPage from './pages/contact/contactPage';
import Decorclass from './pages/decorclass';
import Agroclass from './pages/agroclass';
import Factory from './pages/factory/factory';



function App() {

  
  useEffect(() => {
    window.scrollTo(0, 0)
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <BrowserRouter>
    <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/decorclass" element={<Decorclass/>} />
      <Route path="/agroclass" element={<Agroclass/>} />
      <Route path="/factory" element={<Factory/>} />
    </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
