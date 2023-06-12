import React from 'react'

const Contact = () => {
  return (
    <div className='map'>
        <div className="container">
        <h1 className='main_title'>Контакты</h1>
        <div className="map_top">
          <div>
          <span className='title'>Телефон номер</span>
        <a href='tel:+99897-771-31-51'>+99897-771-31-51</a>
          </div>
          <div>
          <span className='title'>Электронная почта</span>
        <a href='https://goo.gl/maps/tUTr29wSu6x3bRXh8?coh=178573&entry=tt'>webdesigner20021313@gmail.com</a>
          </div>
          <div>
          <span className='title'>Адрес</span>
        <a href='https://goo.gl/maps/tUTr29wSu6x3bRXh8?coh=178573&entry=tt'>Бектемирский район</a>
          </div>
        </div>
        </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6003.032592508762!2d69.292698!3d41.210518!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzM3LjkiTiA2OcKwMTcnMzMuNyJF!5e0!3m2!1sru!2s!4v1684314395725!5m2!1sru!2s" width="600" height="450" ></iframe>
    </div>
  )
}

export default Contact