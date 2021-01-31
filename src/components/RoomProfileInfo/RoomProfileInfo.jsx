import React from 'react'
import smile from '../../assets/img/smile.svg'
import building from '../../assets/img/bulding.svg'
import fire from '../../assets/img/fire.svg'
import './RoomProfileInfo.scss'

const RoomProfileInfo = () => {
  return (
      <>
        <div className="room-profile__about">
          <div className="room-profile__about_data">
            <h3>Сведения о номере</h3>

            <div className='room-profile__about_item'>
              <img src={smile} alt="comfort"/>
              <div className='room-profile__about_item-info'>
                <h4 className="room-profile__about_subtitle">Комфорт</h4>
                <span>Шумопоглащающие стены</span>
              </div>
            </div>

            <div className='room-profile__about_item'>
              <img src={building} alt="convenience"/>
              <div className='room-profile__about_item-info'>
                <h4 className="room-profile__about_subtitle">Удобство</h4>
                <span>Окно в каждой из спален</span>
              </div>
            </div>

            <div className='room-profile__about_item'>
              <img src={fire} alt="cosiness"/>
              <div className='room-profile__about_item-info'>
                <h4 className="room-profile__about_subtitle">Уют</h4>
                <span>Номер оснащен камином</span>
              </div>
            </div>

          </div>
          <div className="room-profile__about_impressions">
            <h3>Впечатления о номере</h3>

          </div>
        </div>
      </>
  )
}

export default RoomProfileInfo
