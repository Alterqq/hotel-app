import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import Arrow from '../common/Arrow';

const Header = () => {
  return (
      <header className={styles.header}>
        <img src={logo} alt=""/>
        <nav>
          <ul className={styles.navList}>
            <li>О нас</li>
            <li>Услуги <Arrow/></li>
            <li>Вакансии</li>
            <li>Новости</li>
            <li>Соглашения <Arrow/></li>
          </ul>
          <div className={styles.buttons}>
            <div className={styles.login}><span>Войти</span></div>
            <div className={styles.reg}>Зарегистрироваться</div>
          </div>
        </nav>
      </header>
  )
}

export default Header;
