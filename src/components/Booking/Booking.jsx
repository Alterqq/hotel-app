import React, {useEffect, useState} from 'react'
import './Booking.scss'
import DatesArea from '../RoomSelection/DatesArea/DatesArea';
import Calendar from '../Calendar/Calendar';
import SelectGuests from '../SelectGuests/SelectGuests';
import {getAdditionallyCount, getDiffDays, getPropString} from '../../utils';

const Booking = ({date, setDate, profile, filter, totalGuests, ...props}) => {
  const days = getDiffDays(date[0].startDate, date[0].endDate)
  const price = profile.filter.price
  const daysPrice = price * days
  const additionallyPrice = getAdditionallyCount(filter) * 300
  const [viewCalendar, setViewCalendar] = useState(false)
  const [isFree, setIsFree] = useState(true)
  const [isGuests, setIsGuests] = useState(true)

  const startUser = date[0].startDate.getTime()
  const endUser = date[0].endDate.getTime()
  const startRoom = profile.filter.startDate.getTime()
  const endRoom = profile.filter.endDate.getTime()
  useEffect(() => {
    if (startUser > startRoom && endUser < endRoom) {
      setIsFree(true)
    } else {
      setIsFree(false)
    }
  }, [setIsFree, isFree, startUser, startRoom, endUser, endRoom])

  useEffect(() => {
    if (totalGuests > profile.filter.guests || totalGuests === 0) {
      setIsGuests(false)
    } else {
      setIsGuests(true)
    }
  }, [totalGuests, profile, setIsGuests, isGuests])

  const onBooking = () => {
    props.roomBooking({
      number: profile.number,
      startDate: date[0].startDate,
      endDate: date[0].endDate
    })
    console.log('click')
  }

  return (
      <div className='booking'>
        <div className='booking__description'>
          <div className='booking__title'>
            №<h3>{profile.number}</h3>
            {profile.isLuxury && <span>Люкс</span>}
          </div>
          <span className="booking__description_price">
              <span>{price}Р </span>
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
          {!isFree && <p>Номер уже забронирован на выбранные даты</p>}
        </div>


        <div className="booking__guests">
          <SelectGuests/>
          {!isGuests && <p>Вы не указали ни одного гостя, либо данный номер не позволяет вместить столько гостей</p>}
        </div>

        <div className="booking__price">
          <div>
            <span>{price} x {days} {getPropString(days, 'ночь', 'ночи', 'ночей')}</span>
            <span>{daysPrice}Р</span>
          </div>
          <div>
            <span>Сбор за доп. услуги</span>
            <span>{additionallyPrice}Р</span>
          </div>
        </div>

        <div className="booking__total">
          <h4>Итого</h4>
          <span/>
          <h4>{daysPrice + additionallyPrice}Р</h4>
        </div>

        <button
            onClick={onBooking}
            disabled={!isFree && !isGuests}
            className={isFree && isGuests ? 'booking__button' : 'booking__button disabled'}>
          <span className="material-icons">arrow_forward</span>
          Забронировать
        </button>
      </div>
  )
}

export default Booking
