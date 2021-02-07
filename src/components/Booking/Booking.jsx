import React from 'react'
import DatesArea from '../RoomSelection/DatesArea/DatesArea'
import Calendar from '../Calendar/Calendar'
import SelectGuests from '../SelectGuests/SelectGuests'
import {getPropString} from '../../utils'
import './Booking.scss'
import {NavLink} from 'react-router-dom';

const Booking = ({
                   profile, price, viewCalendar,
                   setViewCalendar, date, setDate,
                   isFree, isGuests, days, daysPrice,
                   additionallyPrice, onBooking,
                   bookingSuccess
                 }) => {
  return (
      <div className='booking'>
        <div className='booking__description'>
          <div className='booking__title'>
            №<h3>{profile.number}</h3>
            {profile.isLuxury && <span>Люкс</span>}
          </div>
          <span className='booking__description_price'>
              <span>{price.toLocaleString()}Р </span>
              в сутки
            </span>
        </div>
        <div className='booking__dates'>
          <DatesArea
              title='Прибытие'
              viewCalendar={viewCalendar}
              setViewCalendar={setViewCalendar}
              date={date[0].startDate}/>
          <DatesArea
              title='Выезд'
              viewCalendar={viewCalendar}
              setViewCalendar={setViewCalendar}
              date={date[0].endDate}/>
          {viewCalendar && <Calendar
              date={date}
              setDate={setDate}
              setView={setViewCalendar}/>}
          {!isFree && !bookingSuccess && <p>
            На выбранные даты номер уже забронирован
          </p>}
          <div className='booking__success'>
            {bookingSuccess &&
            <>
              <p>Номер успешно забронирован</p>
              <NavLink to='/'>Вернуться на главную</NavLink>
            </>
            }
          </div>

        </div>
        <div className='booking__guests'>
          <SelectGuests/>
          {!isGuests &&
          <p>
            Вы не указали ни одного гостя, либо данный номер не позволяет вместить столько гостей
          </p>}
        </div>
        <div className='booking__price'>
          <div>
            <span>
              {price.toLocaleString()} x {days} {getPropString(days, 'ночь', 'ночи', 'ночей')}
            </span>
            <span>{daysPrice.toLocaleString()}Р</span>
          </div>
          <div>
            <span>Сбор за доп. услуги</span>
            <span>{additionallyPrice.toLocaleString()}Р</span>
          </div>
        </div>
        <div className='booking__total'>
          <h4>Итого</h4>
          <span/>
          <h4>{(daysPrice + additionallyPrice).toLocaleString()}Р</h4>
        </div>
        <button
            onClick={onBooking}
            disabled={!isFree && !isGuests}
            className={isFree && isGuests ? 'booking__button' : 'booking__button disabled'}>
          <span className='material-icons'>arrow_forward</span>
          Забронировать
        </button>
      </div>
  )
}

export default Booking
