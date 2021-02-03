import {clearCounter, getCounter, setTotalFacilities, setTotalGuests} from '../utils'
import {
  ADD_CONVENIENCE,
  ADD_GUEST, CLEAR_CONVENIENCE_COUNTER,
  CLEAR_GUESTS_COUNTER,
  REMOVE_CONVENIENCE,
  REMOVE_GUEST, ROOM_BOOKING, SET_FILTERS,
  SET_ROOM_PROFILE
} from './types'
import initialState from './initialState'


const roomSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GUEST:
    case REMOVE_GUEST:
      return {
        ...state,
        guests: getCounter(state, action, 'guests', ADD_GUEST, REMOVE_GUEST),
        totalGuests: setTotalGuests(state.guests)
      }
    case CLEAR_GUESTS_COUNTER:
      return {
        ...state,
        guests: clearCounter(state, 'guests'),
        totalGuests: setTotalGuests(state.guests)
      }
    case ADD_CONVENIENCE:
    case REMOVE_CONVENIENCE:
      return {
        ...state,
        facilities: getCounter(state, action, 'facilities', ADD_CONVENIENCE, REMOVE_CONVENIENCE),
        totalFacilities: setTotalFacilities(state.facilities, state.totalFacilities)
      }
    case CLEAR_CONVENIENCE_COUNTER:
      return {
        ...state,
        facilities: clearCounter(state, 'facilities'),
        totalFacilities: setTotalFacilities(state.facilities, state.totalFacilities)
      }
    case SET_FILTERS:
      return {
        ...state,
        filter: {...action.payload,}
      }
    case SET_ROOM_PROFILE:
      return {...state, profile: action.payload}
    case ROOM_BOOKING:
      return {
        ...state,
        rooms: state.rooms.map(room => {
          if (room.number === action.payload.number) {
            const keys = Object.keys(room.filter)
            keys.forEach(key => {
              if (action.payload[key]) {
                room.filter[key] = action.payload[key]
              }
            })
          }
          return room
        })
      }

    default:
      return state
  }
}

export default roomSelectionReducer
