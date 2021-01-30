import React, {useState} from 'react'
import './SelectGuests.scss'
import DropdownItem from '../DropdownItem/DropdownItem';
import {connect} from 'react-redux';
import {getPropString} from '../../utils';
import {addGuest, clearCounter, removeGuest} from '../../redux/actions';

const SelectGuests = ({guests, addGuest, removeGuest, totalGuests, clearCounter}) => {
  const [viewSelectGuests, setViewSelectGuests] = useState(false)

  return (
      <>
        <div className="selection__guests">
          <h3>Гости</h3>

          <div
              className="selection__guests_input"
              onClick={() => setViewSelectGuests(!viewSelectGuests)}
          ><span className="material-icons">{viewSelectGuests ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
            {totalGuests} {getPropString(totalGuests, 'гость', 'гостя', 'гостей')}</div>

          {viewSelectGuests && <div className='selection__guests_dropdown'>
            {guests.map(guest => <DropdownItem
                key={guest.type}
                item={guest}
                add={addGuest}
                remove={removeGuest}
            />)}
            <div className='selection__guests_dropdown-buttons'>
              <div onClick={clearCounter}>Очистить</div>
              <div onClick={() => setViewSelectGuests(false)}>Применить</div>
            </div>
          </div>}
        </div>
      </>
  )
}

const mapStateToProps = (state) => {
  return {
    guests: state.roomSelection.guests,
    totalGuests: state.roomSelection.totalGuests
  }
}
export default connect(mapStateToProps, {addGuest, removeGuest, clearCounter})(SelectGuests);
