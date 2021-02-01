import {clearCounter, getCounter, getTotalFacilities, getTotalGuests} from '../utils'
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
        totalGuests: getTotalGuests(state.guests)
      }
    case CLEAR_GUESTS_COUNTER:
      return {
        ...state,
        guests: clearCounter(state, 'guests'),
        totalGuests: getTotalGuests(state.guests)
      }
    case ADD_CONVENIENCE:
    case REMOVE_CONVENIENCE:
      return {
        ...state,
        facilities: getCounter(state, action, 'facilities', ADD_CONVENIENCE, REMOVE_CONVENIENCE),
        totalFacilities: getTotalFacilities(state.facilities, state.totalFacilities)
      }
    case CLEAR_CONVENIENCE_COUNTER:
      return {
        ...state,
        facilities: clearCounter(state, 'facilities'),
        totalFacilities: getTotalFacilities(state.facilities, state.totalFacilities)
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
        ...state, rooms: state.rooms.map(room => {
          if (room.number === action.payload.number) {
            return {
              ...room,
              filter: {
                ...action.payload,
                guests: room.filter.guests,
                price: room.filter.price,
                withGuests: room.filter.withGuests,
                withCorridor: room.filter.withCorridor,
                withHelper: room.filter.withHelper,
                additionally: {...room.filter.additionally},
                bedrooms: room.filter.bedrooms,
                beds: room.filter.beds,
                bathrooms: room.filter.bathrooms,
              }
            }
          }
          return room
        })
      }
    default:
      return state
  }
}

export default roomSelectionReducer
