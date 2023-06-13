import React from 'react'
import "./about.scss"
import Advantages from '../../component/advantages'
import Contact from '../../component/contact'


const About = () => {
  return (
    <div className='about'>
      <div className="about_header">
        <div className="container">
        <span>ALUCLASS с более чем 10-летней историей <b>занимается профессиональным</b></span>
        <p>с более чем 10-летней историей занимается профессиональным бизнесом в сфере новых отделочных материалов, включая оборудование для профессиональных машин и сырье, например, панели из ПВХ, фольгу для горячего тиснения для пластиковых панелей, пленку из ПВХ и скоро.</p>
        </div>
      </div>
      <Advantages/>
      <div className="about_block container">
        <span>Кратко о нас</span>
        <p>Проект по изданию серии книг-альбомов «Архитектурная эпиграфика Узбекистана» стартовал в 2010 году. В результате многолетней кропотливой работы по изучению посланий наших далеких предков выпущено 13 (из запланированных 25) разноязычных томов. из серии «Архитектурная эпиграфика Узбекистана» изданы на узбекском, русском, арабском и английском языках. Среди них книги-альбомы, посвященные эпиграфическим надписям на архитектурных памятниках Каракалпакстана, Андижана, Бухары, Кашкадарьи, Навои, Намангана, Сурхандарьи, Ферганы, Хорезма, Ташкента и Ташкентской области, а также фотоальбомы, посвященные архитектурно-историческим комплексам Самарканда. - Регистан и Шахи-Зинда. Уже переведены надписи на 1500+ эпиграфических памятниках Узбекистана. Среди полученных стенограмм - стихи и поэтические изречения, назидания, добрые пожелания и мудрые изречения, имена мастеров и каллиграфов, религиозные и дарственные надписи, хронограммы исторических событий и указы правителей. Специалисты не только нашли, изучили и расшифровали огромное количество эпиграфического материала, но исправили и обогатили ранние прочтения и переводы тюркских, арабских и персидских надписей. Проект по изданию серии книг-альбомов «Архитектурная эпиграфика Узбекистана» стартовал в 2010 году. В результате многолетней кропотливой работы по изучению посланий наших далеких предков выпущено 13 (из запланированных 25) разноязычных томов. из серии «Архитектурная эпиграфика Узбекистана» изданы на узбекском, русском, арабском и английском языках. Среди них книги-альбомы, посвященные эпиграфическим надписям на архитектурных памятниках Каракалпакстана, Андижана, Бухары, Кашкадарьи, Навои, Намангана, Сурхандарьи, Ферганы, Хорезма, Ташкента и Ташкентской области, а также фотоальбомы, посвященные архитектурно-историческим комплексам Самарканда. - Регистан и Шахи-Зинда. Уже переведены надписи на 1500+ эпиграфических памятниках Узбекистана. Среди полученных стенограмм - стихи и поэтические изречения, назидания, добрые пожелания и мудрые изречения, имена мастеров и каллиграфов, религиозные и дарственные надписи, хронограммы исторических событий и указы правителей. Специалисты не только нашли, изучили и расшифровали огромное количество эпиграфического материала, но исправили и обогатили ранние прочтения и переводы тюркских, арабских и персидских надписей.</p>
      </div>
      <Contact/>
    </div>
  )
}

export default About