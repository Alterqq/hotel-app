import React, {useEffect} from 'react'
import large1 from '../../assets/img/room-large1.png'
import large2 from '../../assets/img/room-large2.png'
import large3 from '../../assets/img/room-large3.png'
import RoomProfileAbout from '../../components/RoomProfileAbout/RoomProfileAbout';
import RoomRules from '../../components/RoomRules/RoomRules';
import Booking from '../../components/Booking/Booking';
import {connect} from 'react-redux';
import {roomBooking, setRoomProfile} from '../../redux/actions';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {setRoom} from '../../utils';
import Loader from '../../components/common/Loader/Loader';
import './RoomProfilePage.scss'

const RoomProfilePage = ({date, setDate, rooms, profile, setRoomProfile, ...props}) => {

  useEffect(() => {
    setRoom(rooms, props.match.params.number, setRoomProfile)
  }, [rooms, props.match.params.number, setRoomProfile])

  if (!profile) return <Loader/>

  return (
      <div className='room-profile'>
        <div className="room-profile_images">
          <img src={large1} alt="room"/>
          <img src={large2} alt="room"/>
          <img src={large3} alt="room"/>
        </div>
        <div className="room-profile__wrapper">
          <div className="room-profile__info">
            <RoomProfileAbout profile={profile}/>
            <RoomRules profile={profile}/>
          </div>
          <div className="room-profile__booking">
            <Booking
                totalGuests={props.totalGuests}
                filter={props.filter}
                roomBooking={props.roomBooking}
                date={date}
                setDate={setDate}
                profile={profile}
                rooms={rooms}/>
          </div>
        </div>
      </div>
  )
}
const mapStateToProps = state => {
  return {
    profile: state.roomSelection.profile,
    rooms: state.roomSelection.rooms,
    filter: state.roomSelection.filter,
    totalGuests: state.roomSelection.totalGuests
  }
}
export default compose(
    connect(mapStateToProps, {setRoomProfile, roomBooking}),
    withRouter
)(RoomProfilePage)
