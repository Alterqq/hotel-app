import React from 'react'
import './DatesArea.scss'

const DatesArea = ({viewCalendar, setViewCalendar, date, title}) => {
  return (
      <div className='selection__dates_area' onClick={() => setViewCalendar(!viewCalendar)}>
        <h3>{title}</h3>
        <span className='material-icons'>{ viewCalendar ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
        <input
            placeholder='ДД.ММ.ГГГГ'
            type='text'
            value={date.toLocaleDateString() || ''}
            readOnly
        />
      </div>
  )
}

export default DatesArea
