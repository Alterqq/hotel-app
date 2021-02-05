import React from 'react'
import logo from '../../assets/img/logo.svg'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAuth, getUserProfile} from '../../redux/selectors'
import {logout} from '../../redux/actions'
import './Header.scss'

const Header = ({isAuth, userProfile, logout}) => {
  return (
      <header className='header'>
        <div className='header__wrapper'>
          <NavLink to='/'><img src={logo} alt=''/></NavLink>
          {!isAuth
              ? <div className='header__buttons'>
                <NavLink to='/login'>
                  <div className='header__buttons_login'><span>Войти</span></div>
                </NavLink>
                <NavLink to='/registration'>
                  <div className='header__buttons_reg'>Зарегистрироваться</div>
                </NavLink>
              </div>
              : <div className='header__authorized'>
                <span>{userProfile.firstName} {userProfile.lastName}</span>
                <div onClick={logout} className='header__buttons_login'><span>Выйти</span></div>
              </div>
          }
        </div>
      </header>
  )
}
const mapStateToProps = state => {
  return {
    isAuth: getAuth(state),
    userProfile: getUserProfile(state)
  }
}
export default connect(mapStateToProps, {logout})(Header)
