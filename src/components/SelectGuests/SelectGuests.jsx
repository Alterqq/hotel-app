import React, {useState} from 'react'
import './SelectGuests.scss'
import DropdownItem from '../DropdownItem/DropdownItem'
import {connect} from 'react-redux'
import {getPropString} from '../../utils'
import {addGuest, clearGuestsCounter, removeGuest} from '../../redux/actions'
import {getGuests, getTotalGuests} from '../../redux/selectors'

const SelectGuests = ({guests, addGuest, removeGuest, totalGuests, clearGuestsCounter}) => {
  const [viewSelectGuests, setViewSelectGuests] = useState(false)

  return (
      <>
        <div className='selection__guests'>
          <h3>Гости</h3>

          <div
              className='selection__guests_input'
              onClick={() => setViewSelectGuests(!viewSelectGuests)}
          ><span className='material-icons'>{viewSelectGuests ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
            {totalGuests || 'Сколько'} {getPropString(totalGuests, 'гость', 'гостя', 'гостей')}</div>

          {viewSelectGuests && <div className='selection__guests_dropdown'>
            {guests.map(guest => <DropdownItem
                key={guest.type}
                item={guest}
                add={addGuest}
                remove={removeGuest}
            />)}
            <div className='selection__guests_dropdown-buttons'>
              <div onClick={clearGuestsCounter}>Очистить</div>
              <div onClick={() => setViewSelectGuests(false)}>Применить</div>
            </div>
          </div>}
        </div>
      </>
  )
}

const mapStateToProps = (state) => {
  return {
    guests: getGuests(state),
    totalGuests: getTotalGuests(state)
  }
}
export default connect(mapStateToProps, {addGuest, removeGuest, clearGuestsCounter})(SelectGuests)
