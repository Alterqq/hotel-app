import React, {useState} from 'react'
import './Booking.scss'
import DatesArea from '../RoomSelection/DatesArea/DatesArea';
import Calendar from '../Calendar/Calendar';
import SelectGuests from '../SelectGuests/SelectGuests';

const Booking = ({date, setDate}) => {
  const [viewCalendar, setViewCalendar] = useState(false)
  return (
      <div className='booking'>
        <div className='booking__description'>
          <div className='booking__title'>
            №<h3>888</h3>
            <span>Люкс</span>
          </div>
          <span className="booking__description_price">
              <span>9900Р </span>
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
        </div>

        <div className="booking__guests">
          <SelectGuests/>
        </div>

        <div className="booking__price">
          <div>
            <span>9990Р x 4 суток</span>
            <span>39960Р</span>
          </div>
          <div>
            <span>Сбор за доп. услуги</span>
            <span>300Р</span>
          </div>
        </div>

        <div className="booking__total">
          <h4>Итого</h4>
          <span/>
          <h4>38081Р</h4>
        </div>

        <div className='booking__button'>
          <span className="material-icons">arrow_forward</span>
          Забронировать</div>
      </div>
  )
}

export default Booking
