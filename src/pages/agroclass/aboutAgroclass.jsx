import React from 'react'

import agroclassbanner from "../../public/images/agroclassbanner.png"

const AboutAgroclass = () => {
  return (
    <div className='advantages container'>
    <div className="advantages_left">
     <h1 className='main_title'>Наш <b>продукт</b></h1>
     <div className="advantages_left_info">
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>01</h2>
            <span>Цены доступные, а ленты отличного качества.</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>02</h2>
            <span>Эмиттер оралиғи 15-30см (талабга биноан ўзгартириш мумкун)</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>03</h2>
            <span>Калинлик 0.18-0.24 мм (талабга биноан ўзгартириш мумкун)</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>04</h2>
            <span>Рулон 2.000м (талабга биноан ўзгартириш мумкун)</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>05</h2>
            <span>16 лик трубалар учун (талабга биноан ўзгартириш мумкун)</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>06</h2>
            <span>Соатига 2 литр томизади ва сув томчилатиш эммитери онсонликча беркилиб қолмайди</span>
        </div>
     </div>

    </div>
    <div className="advantages_right">
     <img src={agroclassbanner} alt="" />
    </div>
    
</div>
  )
}

export default AboutAgroclass