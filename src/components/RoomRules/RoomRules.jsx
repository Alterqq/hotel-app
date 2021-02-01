import React from 'react'
import './RoomRules.scss'

const RoomRules = () => {
  return (
      <div className='room-profile__rules'>
        <div className="room-profile__rules_main">
          <h3>Правила</h3>
          <span>Нельзя с питомцами</span>
          <span>Без вечеринок и мероприятий</span>
          <span>Время прибытия — после 13:00, а выезд до 12:00</span>
        </div>

        <div className="room-profile__rules_cancel">
          <h3>Отмена</h3>
          <p>
            Бесплатная отмена в течение 48 ч.
            После этого при отмене не позднее чем за 5 дн.
            до прибытия вы получите полный возврат за вычетом сбора за услуги.</p>
        </div>
      </div>
  )
}

export default RoomRules
