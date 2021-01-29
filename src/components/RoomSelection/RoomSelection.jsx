import React, {useState} from 'react'
import {addDays} from 'date-fns';
import './RoomSelection.scss'
import Calendar from '../Calendar/Calendar';
import SelectGuests from '../SelectGuests/SelectGuests';
import DatesArea from './DatesArea/DatesArea';

const RoomSelection = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ])
  const [viewCalendar, setViewCalendar] = useState(false)

  return (
      <div className='selection'>
        <h2>Найдём номера под ваши пожелания</h2>
        <div className="selection__dates">
          <DatesArea
              viewCalendar={viewCalendar}
              setViewCalendar={setViewCalendar}
              date={date[0].startDate}/>
          <DatesArea
              viewCalendar={viewCalendar}
              setViewCalendar={setViewCalendar}
              date={date[0].endDate}/>
        </div>
        <SelectGuests/>
        {viewCalendar && <Calendar
            date={date}
            setDate={setDate}
            setView={setViewCalendar}/>}
      </div>
  )
}

export default RoomSelection;
