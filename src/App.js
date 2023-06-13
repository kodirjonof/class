
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
import ContactPage from './pages/contact/contactPage';
import Aluclass from './pages/aluclass';



function App() {

  
  useEffect(() => {
    window.scrollTo(0, 0)
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/decorclass" element={<Aluclass/>} />
    </Routes>
    </main>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
