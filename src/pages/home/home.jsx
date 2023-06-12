import React from 'react'
import Slider from './slider'

import './home.scss';
import Advantages from './advantages';
import Product from './product';
import Brands from '../../component/brands';
import Contact from '../../component/contact';

const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <Brands/>
        <Advantages/>
        <Product/>
        <Contact/>
    </div>
  )
}

export default Home