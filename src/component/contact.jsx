import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = ({phone}) => {
  const [t] = useTranslation("global")

  return (
    <div className='map'>
        <div className="container">
        <h1 className='main_title'>{t("header.contact")}</h1>
        <div className="map_top">
          <div>
          <span className='title'>{t("contact.num")}</span>
        <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div>
          <span className='title'>{t("contact.mail")}</span>
        <a href='https://goo.gl/maps/tUTr29wSu6x3bRXh8?coh=178573&entry=tt'>webdesigner20021313@gmail.com</a>
          </div>
          <div>
          <span className='title'>{t("contact.address")}</span>
        <a href='https://goo.gl/maps/tUTr29wSu6x3bRXh8?coh=178573&entry=tt'>Бектемирский район</a>
          </div>
        </div>
        </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6003.032592508762!2d69.292698!3d41.210518!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzM3LjkiTiA2OcKwMTcnMzMuNyJF!5e0!3m2!1sru!2s!4v1684314395725!5m2!1sru!2s" width="600" height="450" ></iframe>
    </div>
  )
}

export default Contact