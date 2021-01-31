import React, {useState} from 'react'
import './RoomSelection.scss'
import Calendar from '../Calendar/Calendar'
import SelectGuests from '../SelectGuests/SelectGuests'
import DatesArea from './DatesArea/DatesArea'
import {NavLink} from 'react-router-dom';

const RoomSelection = ({date, setDate}) => {
  const [viewCalendar, setViewCalendar] = useState(false)
  return (
      <div className='selection'>
        <h2>Найдём номера под ваши пожелания</h2>
        <div className="selection__dates">
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
        <SelectGuests/>
        <NavLink to='/search'>
          <div className="selection__button">
            <span className="material-icons">arrow_forward</span>
            Подобрать номер
          </div>
        </NavLink>
      </div>
  )
}

export default RoomSelection
