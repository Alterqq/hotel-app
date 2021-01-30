import React, {useState} from 'react'
import Slider from '@material-ui/core/Slider';
import Checkbox from './Checkbox/Checkbox';
import {getDay, getShortMonthName} from '../../utils';
import './Filters.scss'
import Calendar from '../Calendar/Calendar';
import SelectGuests from '../SelectGuests/SelectGuests';
import SelectFacilities from '../SelectFacilities/SelectFacilities';

const Filters = ({date, setDate}) => {
  const [price, setPrice] = useState([3000, 7000])
  const [viewCalendar, setViewCalendar] = useState(false)
  const [viewCheckboxDropDown, setViewCheckboxDropDown] = useState(false)

  const startMonth = getShortMonthName(date, 'startDate')
  const endMonth = getShortMonthName(date, 'endDate')
  const statDay = getDay(date, 'startDate')
  const endDay = getDay(date, 'endDate')
  const changePrice = (e, data) => setPrice(data)

  return (
      <div className='filters'>
        <div className="filters__item">
          <h3 className='filters__title'>Дата прибывания в отеле</h3>
          <div className="filters__dropdown-input" onClick={() => setViewCalendar(!viewCalendar)}>
            {statDay} {startMonth} - {endDay} {endMonth}
            <span
                className="material-icons arrow-down">{viewCalendar ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
          </div>
          {viewCalendar && <Calendar date={date}
                                     setDate={setDate}
                                     setView={setViewCalendar}
          />}
        </div>
        <div className="filters__item">
          <SelectGuests/>
        </div>

        <div className='filters__item'>
          <div className="filters__price_header">
            <h3>Диапазон цены</h3>
            <span>{price[0]}Р - {price[1]}Р</span>
          </div>
          <Slider
              value={price}
              onChange={changePrice}
              min={1}
              max={10000}
              classes={{rail: 'rail', track: 'track', thumb: 'thumb'}}
          />
          <p className="filters__price_description">
            Стоимость за сутки пребывания в номере
          </p>
        </div>

        <div className="filters__item">
          <h3 className='filters__title'>Правила дома</h3>
          <div className="filters__rules">
            <Checkbox id={'smoke'} title={'Можно курить'}/>
            <Checkbox id={'pets'} title={'Можно с питомцами'}/>
            <Checkbox id={'guests'} title={'Можно пригласить гостей'}/>
          </div>
        </div>
        <div className="filters__item">
          <h3 className="filters__title">Доступность</h3>
          <Checkbox id={'corridor'} title={'Широкий корридор'}/>
          <Checkbox id={'helper'} title={'Помощник для инвалидов'}/>
        </div>

        <div className="filters__item">
          <SelectFacilities/>
        </div>

        <div className="filters__item">
          <h3 className='filters__title checkbox' onClick={() => setViewCheckboxDropDown(!viewCheckboxDropDown)}>
            Дополнительные удобства
            <span className="material-icons arrow-down">keyboard_arrow_down</span>
          </h3>

          {viewCheckboxDropDown && <div className="filters__checkbox-dropdown">
            <Checkbox id={'breakfast'} title={'Завтрак'}/>
            <Checkbox id={'table'} title={'Письменный стол'}/>
            <Checkbox id={'chair'} title={'Стул для кормления'}/>
            <Checkbox id={'crib'} title={'Кроватка'}/>
            <Checkbox id={'tv'} title={'Телевизор'}/>
            <Checkbox id={'shampoo'} title={'Шампунь'}/>
          </div>}
        </div>
      </div>
  )
}

export default Filters;
