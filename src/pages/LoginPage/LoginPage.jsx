import React from 'react'
import './LoginPage.scss'
import {NavLink} from 'react-router-dom';
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer';

const LoginPage = () => {
  return (
      <div className='login'>
        <div className='login__wrapper'>
          <div className='login__form'>
            <h3>Войти</h3>
            <LoginFormContainer />
            <div className='login__create'>
              <p>Нет аккаунта на Toxin?</p>
              <NavLink to='/registration'>
                <div className='login__create_button'><span>Создать</span></div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LoginPage
