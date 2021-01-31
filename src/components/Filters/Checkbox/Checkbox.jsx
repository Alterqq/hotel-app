import React from 'react'
import './Checkbox.scss'

const Checkbox = ({id, title, possibility = false, setPossibility}) => {

  return (
      <div className="checkbox">
        <input type='checkbox' id={id} checked={possibility} onChange={() => setPossibility(!possibility)}/>
        <label htmlFor={id}>{title}</label>
      </div>
  )
}

export default Checkbox
