import React from 'react'
import large1 from '../../assets/img/room-large1.png'
import large2 from '../../assets/img/room-large2.png'
import large3 from '../../assets/img/room-large3.png'
import RoomProfileAbout from '../../components/RoomProfileAbout/RoomProfileAbout';
import RoomRules from '../../components/RoomRules/RoomRules';
import './RoomProfilePage.scss'
import Booking from '../../components/Booking/Booking';

const RoomProfilePage = ({date, setDate}) => {
  return (
      <div className='room-profile'>
        <div className="room-profile_images">
          <img src={large1} alt="room"/>
          <img src={large2} alt="room"/>
          <img src={large3} alt="room"/>
        </div>
        <div className="room-profile__wrapper">
          <div className="room-profile__info">
            <RoomProfileAbout/>
            <RoomRules/>
          </div>
          <div className="room-profile__booking">
            <Booking date={date} setDate={setDate}/>
          </div>
        </div>
      </div>
  )
}

export default RoomProfilePage
