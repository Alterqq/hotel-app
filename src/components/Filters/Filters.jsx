import React from 'react'
import Slider from '@material-ui/core/Slider'
import Checkbox from './Checkbox/Checkbox'
import Calendar from '../Calendar/Calendar'
import SelectGuests from '../SelectGuests/SelectGuests'
import SelectFacilities from '../SelectFacilities/SelectFacilities'
import './Filters.scss'

const Filters = ({
                   date, setDate, viewCalendar,
                   setViewCalendar, startDay,
                   startMonth, endDay, endMonth,
                   price, changePrice, ...props
                 }) => {
  return (
      <div className='filters'>
        <div className='filters__item'>
          <h3 className='filters__title'>Дата прибывания в отеле</h3>
          <div className='filters__dropdown-input' onClick={() => setViewCalendar(!viewCalendar)}>
            {startDay} {startMonth} - {endDay} {endMonth}
            <span
                className='material-icons arrow-down'>{viewCalendar
                ? 'keyboard_arrow_up'
                : 'keyboard_arrow_down'}
            </span>
          </div>
          {viewCalendar && <Calendar date={date} setDate={setDate} setView={setViewCalendar}/>}
        </div>
        <div className='filters__item'>
          <SelectGuests/>
        </div>
        <div className='filters__item'>
          <div className='filters__price_header'>
            <h3>Диапазон цены</h3>
            <span>{price[0]}Р - {price[1]}Р</span>
          </div>
          <Slider
              value={price}
              onChange={changePrice}
              min={1}
              max={15000}
              classes={{rail: 'rail', track: 'track', thumb: 'thumb'}}
          />
          <p className='filters__price_description'>
            Стоимость за сутки пребывания в номере
          </p>
        </div>
        <div className='filters__item'>
          <h3 className='filters__title'>Правила дома</h3>
          <Checkbox id={'smoke'} title={'Можно курить'} possibility={props.smoke} setPossibility={props.setSmoke}/>
          <Checkbox id={'pets'} title={'Можно с питомцами'} possibility={props.pets} setPossibility={props.setPets}/>
          <Checkbox id={'guests'} title={'Можно пригласить гостей'} possibility={props.guests} setPossibility={props.setGuests}/>
        </div>
        <div className='filters__item'>
          <h3 className='filters__title'>Доступность</h3>
          <Checkbox id={'corridor'} title={'Широкий корридор'} possibility={props.corridor} setPossibility={props.setCorridor}/>
          <Checkbox id={'helper'} title={'Помощник для инвалидов'} possibility={props.helper} setPossibility={props.setHelper}/>
        </div>
        <div className='filters__item'>
          <SelectFacilities/>
        </div>
        <div className='filters__item'>
          <h3 className='filters__title checkbox' onClick={() => props.setViewCheckboxDropDown(!props.viewCheckboxDropDown)}>
            Дополнительные удобства
            <span className="material-icons arrow-down">{props.viewCheckboxDropDown
                ? 'keyboard_arrow_up'
                : 'keyboard_arrow_down'}</span>
          </h3>
          {props.viewCheckboxDropDown && <div className="filters__checkbox-dropdown">
            <Checkbox id={'breakfast'} title={'Завтрак'} possibility={props.breakfast} setPossibility={props.setBreakfast}/>
            <Checkbox id={'table'} title={'Письменный стол'} possibility={props.table} setPossibility={props.setTable}/>
            <Checkbox id={'chair'} title={'Стул для кормления'} possibility={props.chair} setPossibility={props.setChair}/>
            <Checkbox id={'crib'} title={'Кроватка'} possibility={props.crib} setPossibility={props.setCrib}/>
            <Checkbox id={'tv'} title={'Телевизор'} possibility={props.tv} setPossibility={props.setTv}/>
            <Checkbox id={'shampoo'} title={'Шампунь'} possibility={props.shampoo} setPossibility={props.setShampoo}/>
          </div>}
        </div>
      </div>
  )
}

export default Filters
