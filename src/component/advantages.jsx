import React from 'react'

import AdvantagesBanner from "../public/images/advantage.png"

const Advantages = () => {
  return (
    <div className='advantages container'>
        <div className="advantages_left">
         <h1 className='main_title'>Преимущества сотрудничества <b>с нами</b></h1>
         <div className="advantages_left_info">
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>01</h2>
                <span>Надежное партнерство</span>
                <p>Вся продукция компании для наших партнеров всегда в наличии и доставляется строго в указанные сроки без срывов поставок</p>
            </div>
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>02</h2>
                <span>Премиальное качество</span>
                <p>Продукция ALUCLASS не уступает в качестве, а по ряду параметров даже превосходит уровень лучших мировых брендов</p>
            </div>
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>03</h2>
                <span>Эксклюзивный дизайн</span>
                <p>Обои, краски, панно и фрески произведены в содружестве с известными мировыми дизайнерами и художниками</p>
            </div>
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>04</h2>
                <span>Доступная цена</span>
                <p>Стоимость продукции фабрики ALUCLASS в несколько раз выгоднее, чем у аналогичных конкурентных брендов на рынке</p>
            </div>
         </div>

        </div>
        <div className="advantages_right">
         <img src={AdvantagesBanner} alt="" />
        </div>
        
    </div>
  )
}

export default Advantages