import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Slider from '@material-ui/core/Slider'
import {useDebounce} from 'use-debounce'
import Checkbox from './Checkbox/Checkbox'
import {getDay, getShortMonthName} from '../../utils'
import Calendar from '../Calendar/Calendar'
import SelectGuests from '../SelectGuests/SelectGuests'
import SelectFacilities from '../SelectFacilities/SelectFacilities'
import {setFilters} from '../../redux/actions'
import {getTotalFacilities, getTotalGuests} from '../../redux/selectors'
import './Filters.scss'

const Filters = ({date, setDate, totalGuests, setFilters, bedrooms, beds, bathrooms}) => {
  const [price, setPrice] = useState([3000, 13000])
  const [viewCalendar, setViewCalendar] = useState(false)
  const [viewCheckboxDropDown, setViewCheckboxDropDown] = useState(false)
  const [smoke, setSmoke] = useState(false)
  const [pets, setPets] = useState(false)
  const [guests, setGuests] = useState(false)
  const [corridor, setCorridor] = useState(false)
  const [helper, setHelper] = useState(false)
  const [breakfast, setBreakfast] = useState(false)
  const [table, setTable] = useState(false)
  const [chair, setChair] = useState(false)
  const [crib, setCrib] = useState(false)
  const [tv, setTv] = useState(false)
  const [shampoo, setShampoo] = useState(false)

  const startMonth = getShortMonthName(date, 'startDate')
  const endMonth = getShortMonthName(date, 'endDate')
  const statDay = getDay(date, 'startDate')
  const endDay = getDay(date, 'endDate')
  const changePrice = (e, data) => setPrice(data)
  const [debouncePrice] = useDebounce(price, 400)

  useEffect(() => {
      setFilters({
        startDate: date[0].startDate,
        endDate: date[0].endDate,
        guests: totalGuests,
        startPrice: debouncePrice[0],
        endPrice: debouncePrice[1],
        withSmoke: smoke,
        withPets: pets,
        withGuests: guests,
        withCorridor: corridor,
        withHelper: helper,
        bedrooms,
        beds,
        bathrooms,
        additionally: {
          withBreakfast: breakfast,
          withTable: table,
          withChair: chair,
          withCrib: crib,
          withTv: tv,
          withShampoo: shampoo,
        },
      })
  })

  return (
      <div className='filters'>
        <div className='filters__item'>
          <h3 className='filters__title'>Дата прибывания в отеле</h3>
          <div className='filters__dropdown-input' onClick={() => setViewCalendar(!viewCalendar)}>
            {statDay} {startMonth} - {endDay} {endMonth}
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
          <Checkbox id={'smoke'} title={'Можно курить'} possibility={smoke} setPossibility={setSmoke}/>
          <Checkbox id={'pets'} title={'Можно с питомцами'} possibility={pets} setPossibility={setPets}/>
          <Checkbox id={'guests'} title={'Можно пригласить гостей'} possibility={guests} setPossibility={setGuests}/>
        </div>
        <div className='filters__item'>
          <h3 className='filters__title'>Доступность</h3>
          <Checkbox id={'corridor'} title={'Широкий корридор'} possibility={corridor} setPossibility={setCorridor}/>
          <Checkbox id={'helper'} title={'Помощник для инвалидов'} possibility={helper} setPossibility={setHelper}/>
        </div>
        <div className='filters__item'>
          <SelectFacilities/>
        </div>
        <div className='filters__item'>
          <h3 className='filters__title checkbox' onClick={() => setViewCheckboxDropDown(!viewCheckboxDropDown)}>
            Дополнительные удобства
            <span className="material-icons arrow-down">{viewCheckboxDropDown
                ? 'keyboard_arrow_up'
                : 'keyboard_arrow_down'}</span>
          </h3>
          {viewCheckboxDropDown && <div className="filters__checkbox-dropdown">
            <Checkbox id={'breakfast'} title={'Завтрак'} possibility={breakfast} setPossibility={setBreakfast}/>
            <Checkbox id={'table'} title={'Письменный стол'} possibility={table} setPossibility={setTable}/>
            <Checkbox id={'chair'} title={'Стул для кормления'} possibility={chair} setPossibility={setChair}/>
            <Checkbox id={'crib'} title={'Кроватка'} possibility={crib} setPossibility={setCrib}/>
            <Checkbox id={'tv'} title={'Телевизор'} possibility={tv} setPossibility={setTv}/>
            <Checkbox id={'shampoo'} title={'Шампунь'} possibility={shampoo} setPossibility={setShampoo}/>
          </div>}
        </div>
      </div>
  )
}
const mapStateToProps = state => {
  return {
    totalGuests: getTotalGuests(state),
    bedrooms: getTotalFacilities(state).bedrooms,
    beds: getTotalFacilities(state).beds,
    bathrooms: getTotalFacilities(state).bathrooms,
  }
}
export default connect(mapStateToProps, {setFilters})(Filters)
