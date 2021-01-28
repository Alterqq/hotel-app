import React, {useState} from 'react'
import {addDays} from 'date-fns';
import './RoomSelection.scss'
import Calendar from '../Calendar/Calendar';

const RoomSelection = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ])
  const [view, setView] = useState(true)

  return (
      <div className='selection'>
        <h2>Найдём номера под ваши пожелания</h2>
        <div className="selection__dates">
          <div className='selection__dates_area' onClick={() => setView(!view)}>
            <h3>Прибытие</h3>
            <span className="material-icons">keyboard_arrow_down</span>
            <input
                placeholder='ДД.ММ.ГГГГ'
                type="text"
                value={date[0].startDate.toLocaleDateString() || ''}
                readOnly
            />
          </div>
          <div className='selection__dates_area' onClick={() => setView(!view)}>
            <h3>Выезд</h3>
            <span className="material-icons">keyboard_arrow_down</span>
            <input
                placeholder='ДД.ММ.ГГГГ'
                type="text"
                value={date[0].endDate.toLocaleDateString() || ''}
                readOnly
            />
          </div>
        </div>
        <div className="selection__guests">
          <h3>Гости</h3>
          <span className="material-icons">keyboard_arrow_down</span>
          <div className="selection__guests_dropdown">Сколько гостей</div>
        </div>
        <div className="selection__button">
          <span className="material-icons">arrow_forward</span>
          Подобрать номер
        </div>
        {view && <Calendar date={date} setDate={setDate}/>}
      </div>
  )
}

export default RoomSelection;
