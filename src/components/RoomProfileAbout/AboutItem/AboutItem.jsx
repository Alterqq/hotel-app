import React from 'react'
import './AboutItem.scss'

const AboutItem = ({image, title, content}) => {
  return (
      <div className='room-profile__about_item'>
        <img src={image} alt={title}/>
        <div className='room-profile__about_item-info'>
          <h4 className='room-profile__about_subtitle'>{title}</h4>
          <span>{content}</span>
        </div>
      </div>
  )
}

export default AboutItem
