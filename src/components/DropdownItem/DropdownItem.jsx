import React from 'react'
import './DropdownItem.scss'

const DropdownItem = ({item, add, remove}) => {
  return (
      <>
        <div className='dropdown-item'>
          <h3 className='dropdown-title'>{item.title}</h3>
          <div className='dropdown-counter'>
            {item.counter > 0 && <div
                className='dropdown-counter-button'
                onClick={() => remove(item)}
            >-</div>}
            <span>{item.counter}</span>
            <div
                className='dropdown-counter-button'
                onClick={() => add(item)}
            >+</div>
          </div>
        </div>
      </>
  )
}

export default DropdownItem
