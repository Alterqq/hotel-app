import React from 'react'
import './RoomCard.scss'
import {getPropString, getStars} from '../../utils';

const RoomCard = ({room}) => {
  const stars = getStars(room.stars)
  return (
      <div className='room-card'>
        <img src={room.sprites.small} alt="room"/>
        <div className="room-card__info">
          <div className='room-card__description'>
            <div className='room-card__title'>
              <h3>№ {room.number}</h3>
              {room.isLuxury && <span>Люкс</span>}
            </div>
            <span className="room-card__description_price">
              <span>{room.filter.price}Р</span>
              в сутки
            </span>
          </div>
          <div className='room-card__appraisals'>
            <div className='room-card__stars'>
              {stars.map(star => <span key={star.id} className='material-icons star'>{star.value}</span>)}
            </div>
            <span className='room-card__reviews'>
              <span>{room.comments.length} </span>
              {getPropString(room.comments.length, 'отзыв', 'отзыва', 'отзывов')}</span>
          </div>
        </div>
      </div>
  )
}

export default RoomCard
