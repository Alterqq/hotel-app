import React from 'react'
import './SearchingResults.scss'
import RoomCard from '../RoomCard/RoomCard'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {compose} from 'redux'
import {filteredRooms} from '../../redux/selectors'

const SearchingResults = ({rooms}) => {
  return (
      <div className='searching-results'>
        <h2>Номера, которые мы для вас подобрали</h2>
        <div className='searching-results__rooms'>
          {rooms.map(room => <NavLink
              to={`/rooms/${room.number}`}
              key={room.number}><RoomCard room={room}/>
          </NavLink>
          )}
        </div>
        {!rooms.length && <p>К сожалению, не удалось ничего подобрать.</p>}
        <div className='searching-results__paginator'>

        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    rooms: filteredRooms(state)
  }
}

export default compose(
    connect(mapStateToProps, {}),
)(SearchingResults)
