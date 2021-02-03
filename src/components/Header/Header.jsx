import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.svg'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
        <header className='header'>
          <div className='header__wrapper'>
            <NavLink to='/'><img src={logo} alt=''/></NavLink>
              <div className='header__buttons'>
                <div className='header__buttons_login'><span>Войти</span></div>
                <div className='header__buttons_reg'>Зарегистрироваться</div>
              </div>
          </div>
        </header>
  )
}

export default Header
