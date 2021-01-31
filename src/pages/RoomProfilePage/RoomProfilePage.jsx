import React from 'react'
import large1 from '../../assets/img/room-large1.png'
import large2 from '../../assets/img/room-large2.png'
import large3 from '../../assets/img/room-large3.png'
import './RoomProfilePage.scss'
import RoomProfileInfo from '../../components/RoomProfileInfo/RoomProfileInfo';

const RoomProfilePage = () => {
  return (
      <div className='room-profile'>
        <div className="room-profile_images">
          <img src={large1} alt="room"/>
          <img src={large2} alt="room"/>
          <img src={large3} alt="room"/>
        </div>
        <div className="room-profile__wrapper">
          <div className="room-profile__info">
            <RoomProfileInfo/>

          </div>
          <div className="room-profile__booking">

          </div>
        </div>
      </div>
  )
}

export default RoomProfilePage
