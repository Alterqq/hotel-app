import React from 'react'
import './Footer.scss'
import logo from '../../assets/img/logo.svg'
import tw from '../../assets/img/tw-icon.svg'
import fb from '../../assets/img/fb-icon.svg'
import inst from '../../assets/img/inst-icon.svg'

const Footer = () => {
  return (
      <footer className='footer'>
        <div className='footer__wrapper'>
          <div className='footer__info'>
            <div className='footer__list'>
              <img src={logo} alt=''/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, laudantium.</p>
            </div>

            <div className='footer__list'>
              <ul>
                <li className='footer__list_title'>Навигация</li>
                <li>О нас</li>
                <li>Новости</li>
                <li>Служба поддержки</li>
                <li>Услуги</li>
              </ul>
            </div>

            <div className='footer__list'>
              <ul>
                <li className='footer__list_title'>О нас</li>
                <li>О сервисе</li>
                <li>Наша команда</li>
                <li>Вакансии</li>
                <li>Инвесторы</li>
              </ul>
            </div>

            <div className='footer__list'>
              <ul>
                <li className='footer__list_title'>Служба поддержки</li>
                <li>Соглашения</li>
                <li>Сообщества</li>
                <li>Связь с нами</li>
              </ul>
            </div>

            <div className='footer__list'>
              <h3 className='footer__list_title'>Подписка</h3>
              <p>Получайте специальные предложения и новости сервиса</p>
              <div className='footer__list_subscribe'>
                <span className='material-icons'>arrow_forward</span>
                <input type='text' placeholder='Email'/>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='footer__copyright'>
          <p>Copyright © 2018 Toxin отель. Все права защищены.</p>
          <div className='footer__copyright_social'>
            <img src={tw} alt="tw"/>
            <img src={fb} alt="fb"/>
            <img src={inst} alt="inst"/>
          </div>
        </div>
      </footer>
  )
}

export default Footer
