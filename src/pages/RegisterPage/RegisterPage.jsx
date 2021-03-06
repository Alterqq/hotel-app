import React from 'react'
import './RegisterPage.scss'
import {NavLink} from 'react-router-dom';
import RegisterFormContainer from '../../components/RegisterForm/RegisterFormContainer';

const RegisterPage = () => {
  return (
      <div className='registration'>
        <div className='registration__wrapper'>
          <div className='registration__form'>
            <h3>Регистрация аккаунта</h3>
            <RegisterFormContainer/>

            <div className='registration__login'>
              <p>Уже есть аккаунт на Toxin?</p>
              <NavLink to='/login'>
                <div className='login__create_button'><span>Войти</span></div>
              </NavLink>
            </div>
          </div>


        </div>
      </div>
  )
}

export default RegisterPage
