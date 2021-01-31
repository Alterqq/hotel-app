import {clearCounter, getCounter, getTotalFacilities, getTotalGuests} from '../utils'
import {ADD_CONVENIENCE, ADD_GUEST, CLEAR_GUESTS_COUNTER, REMOVE_CONVENIENCE, REMOVE_GUEST} from './types'
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
      return {...state,
        guests: clearCounter(state, 'guests'),
        totalGuests: getTotalGuests(state.guests)}
    case ADD_CONVENIENCE:
    case REMOVE_CONVENIENCE:
      return {...state,
        facilities: getCounter(state, action, 'facilities', ADD_CONVENIENCE, REMOVE_CONVENIENCE),
        totalFacilities: getTotalFacilities(state.facilities, state.totalFacilities)
      }
    default:
      return state
  }
}

export default roomSelectionReducer
