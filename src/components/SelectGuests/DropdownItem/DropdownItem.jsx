import React from 'react'
import './DropdownItem.scss'

const DropdownItem = ({guest, addGuest, removeGuest}) => {
  return (
      <>
        <div className='selection__guests_dropdown-item'>
          <h3 className="selection__guests_dropdown-title">{guest.title}</h3>
          <div className="selection__guests_dropdown-counter">
            <div
                className='selection__guests_dropdown-counter-button'
                onClick={() => addGuest(guest)}
            >+</div>
            <span>{guest.counter}</span>
            <div
                className='selection__guests_dropdown-counter-button'
                onClick={() => removeGuest(guest)}
            >-</div>
          </div>
        </div>
      </>
  )
}

export default DropdownItem
