import React from 'react'
import './Footer.scss';
import logo from '../../assets/img/logo.svg'
import tw from '../../assets/img/tw-icon.svg'
import fb from '../../assets/img/fb-icon.svg'
import inst from '../../assets/img/inst-icon.svg'

const Footer = () => {
  return (
      <footer className='footer'>
        <div className='footer__info'>
          <div className='footer__list'>
            <img src={logo} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, laudantium.</p>
          </div>

          <div className='footer__list'>
            <ul>
              <li className='footer__list_title'>Title</li>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ul>
          </div>

          <div className='footer__list'>
            <ul>
              <li className='footer__list_title'>Title</li>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ul>
          </div>

          <div className='footer__list'>
            <ul>
              <li className='footer__list_title'>Title</li>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ul>
          </div>

          <div className='footer__list'>
            <h3 className='footer__list_title'>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, minima!</p>
            <span className="material-icons">arrow_forward</span>
            <input type="text" placeholder="Email"/>
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

export default Footer;
