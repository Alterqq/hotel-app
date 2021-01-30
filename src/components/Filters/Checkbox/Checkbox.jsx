import React from 'react'
import './Checkbox.scss'

const Checkbox = ({id, title, can = false, setCan}) => {
  return (
      <div className="checkbox">
        <input type='checkbox' id={id} checked={can} onChange={() => setCan(!can)}/>
        <label htmlFor={id}>{title}</label>
      </div>
  )
}

export default Checkbox
