import {clearCounter, getCounter, setTotalFacilities, setTotalGuests} from '../utils'
import {
  ADD_CONVENIENCE,
  ADD_GUEST,
  CLEAR_CONVENIENCE_COUNTER,
  CLEAR_GUESTS_COUNTER,
  REMOVE_CONVENIENCE,
  REMOVE_GUEST,
  ROOM_BOOKING,
  SET_FILTERS,
  SET_ROOM_PROFILE
} from './types'
import {rooms} from './rooms';

const initialState = {
  defaultDate: {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  },
  guests: [
    {type: 'adult', title: 'Взрослые', counter: 1},
    {type: 'children', title: 'Дети', counter: 0},
    {type: 'babies', title: 'Младенцы', counter: 0}
  ],
  totalGuests: 1,
  facilities: [
    {type: 'bedrooms', title: 'Спальни', counter: 0},
    {type: 'beds', title: 'Кровати', counter: 0},
    {type: 'bathrooms', title: 'Ванные комнаты', counter: 0},
  ],
  totalFacilities: {bedrooms: 0, beds: 0, bathrooms: 0},
  filter: {
    startDate: new Date(),
    endDate: new Date(),
    guests: 0,
    startPrice: 0,
    endPrice: 0,
    withSmoke: false,
    withPets: false,
    withGuests: false,
    withCorridor: false,
    withHelper: false,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    additionally: {
      withBreakfast: false,
      withTable: false,
      withChair: false,
      withCrib: false,
      withTv: false,
      withShampoo: false,
    },
  },
  roomProfile: null,
  rooms
}

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
      return {...state, roomProfile: action.payload}
    case ROOM_BOOKING:
      return {
        ...state,
        rooms: state.rooms.map(room => {
          if (room.number === action.payload.number) {
            return {...room, filter: {
              ...room.filter, dates: [...room.filter.dates, action.payload.dates]
            }}
          }
          return room
        })
      }

    default:
      return state
  }
}

export default roomSelectionReducer
