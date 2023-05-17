import React from 'react'
import Slider from './slider'

import './home.scss';
import Advantages from './advantages';
import Product from './product';
import Map from './map';
import Brands from './brands';

const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <Advantages/>
        <Product/>
        <Brands/>
        <Map/>
    </div>
  )
}

export default Home