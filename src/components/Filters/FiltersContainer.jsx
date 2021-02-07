import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useDebounce} from 'use-debounce'
import {getDay, getShortMonthName} from '../../utils'
import {setFilters} from '../../redux/actions'
import {getTotalFacilities, getTotalGuests} from '../../redux/selectors'
import Filters from './Filters'

const FiltersContainer = ({date, setDate, totalGuests, setFilters, bedrooms, beds, bathrooms}) => {
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
  const startDay = getDay(date, 'startDate')
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
      <Filters
          date={date} setDate={setDate} viewCalendar={viewCalendar}
          setViewCalendar={setViewCalendar} startDay={startDay} startMonth={startMonth}
          endDay={endDay} endMonth={endMonth} price={price}
          changePrice={changePrice} smoke={smoke} setSmoke={setSmoke}
          pets={pets} setPets={setPets} guests={guests}
          setGuests={setGuests} corridor={corridor} setCorridor={setCorridor}
          helper={helper} setHelper={setHelper} viewCheckboxDropDown={viewCheckboxDropDown}
          setViewCheckboxDropDown={setViewCheckboxDropDown} breakfast={breakfast} setBreakfast={setBreakfast}
          table={table} setTable={setTable} chair={chair}
          setChair={setChair} crib={crib} setCrib={setCrib}
          tv={tv} setTv={setTv} shampoo={shampoo} setShampoo={setShampoo}
      />
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
export default connect(mapStateToProps, {setFilters})(FiltersContainer)
