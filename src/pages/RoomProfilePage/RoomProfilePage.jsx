import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import large1 from '../../assets/img/room-large1.png'
import large2 from '../../assets/img/room-large2.png'
import large3 from '../../assets/img/room-large3.png'
import RoomProfileAbout from '../../components/RoomProfileAbout/RoomProfileAbout'
import RoomRules from '../../components/RoomRules/RoomRules'
import Booking from '../../components/Booking/Booking'
import {roomBooking, setRoomProfile} from '../../redux/actions'
import {setRoom} from '../../utils'
import Loader from '../../components/common/Loader/Loader'
import {getFilter, getProfile, getRooms, getTotalGuests} from '../../redux/selectors'
import './RoomProfilePage.scss'

const RoomProfilePage = ({date, setDate, rooms, profile, setRoomProfile, ...props}) => {

  useEffect(() => {
    setRoom(rooms, props.match.params.number, setRoomProfile)
  }, [rooms, props.match.params.number, setRoomProfile])

  if (!profile) return <Loader/>

  return (
      <div className='room-profile'>
        <div className='room-profile_images'>
          <img src={large1} alt='room'/>
          <img src={large2} alt='room'/>
          <img src={large3} alt='room'/>
        </div>
        <div className='room-profile__wrapper'>
          <div className='room-profile__info'>
            <RoomProfileAbout profile={profile}/>
            <RoomRules profile={profile}/>
          </div>
          <div className='room-profile__booking'>
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
    profile: getProfile(state),
    rooms: getRooms(state),
    filter: getFilter(state),
    totalGuests: getTotalGuests(state)
  }
}
export default compose(
    connect(mapStateToProps, {setRoomProfile, roomBooking}),
    withRouter
)(RoomProfilePage)
