import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.svg'

const Header = () => {
  return (

        <header className='header'>
          <div className='header__wrapper'><img src={logo} alt=""/>
            <nav>
              <ul className='header__navList'>
                <li>О нас</li>
                <li>Услуги
                  <span className="material-icons">keyboard_arrow_down</span>
                </li>
                <li>Вакансии</li>
                <li>Новости</li>
                <li>Соглашения
                  <span className="material-icons">keyboard_arrow_down</span>
                </li>
              </ul>
              <div className='header__buttons'>
                <div className='header__buttons_login'><span>Войти</span></div>
                <div className='header__buttons_reg'>Зарегистрироваться</div>
              </div>
            </nav>
          </div>
        </header>
  )
}

export default Header;
