import React from 'react'
import './RoomRules.scss'

const RoomRules = ({profile}) => {
  return (
      <div className='room-profile__rules'>
        <div className='room-profile__rules_main'>
          <h3>Правила</h3>
          {profile.rules.map((rule, idx) => <span key={idx}>{rule}</span>)}
        </div>

        <div className='room-profile__rules_cancel'>
          <h3>Отмена</h3>
          {profile.cancel
              ? <p>
                Бесплатная отмена в течение 48 ч.
                После этого при отмене не позднее чем за 5 дн.
                до прибытия вы получите полный возврат за вычетом сбора за услуги.
              </p>
              : <p>Отмена бронирования невозможна</p>
          }
        </div>
      </div>
  )
}

export default RoomRules
