import React from 'react'
import {DateRange} from 'react-date-range';
import {ru} from 'react-date-range/dist/locale';
import {addDays} from "date-fns"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Calendar.scss'

const Calendar = ({date, setDate}) => {
  return (
      <div className='calendar'>
        <span className="material-icons arrow-back">arrow_back</span>
        <span className="material-icons arrow-forward">arrow_forward</span>
        <DateRange
            className='calendar__datepicker'
            locale={ru}
            ranges={date}
            onChange={item => setDate([item.selection])}
            showMonthAndYearPickers={false}
            minDate={addDays(new Date(), 0)}
            maxDate={addDays(new Date(), 200)}
            showDateDisplay={false}
            showSelectionPreview={false}
            showPreview={false}
        />
      </div>
  )
}

export default Calendar
