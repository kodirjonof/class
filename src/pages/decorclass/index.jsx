import React from 'react'

import "./decorclass.scss"
import Brands from '../../component/brands'

const Decorclass = () => {
  return (
    <div className='decorclass'>
        <div className="decorclass_header">
            <span>
            DECOR<b>CLASS</b>
            </span>
            <p>DECORCLASS - компания по производства Алюминиевая композитная панель, компания по производства Алюминиевая композитная панель,</p>
        </div>
        <Brands/>
    </div>
  )
}

export default Decorclass