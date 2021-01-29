import {clearGuestsCounter, getGuestsCounter, getTotalGuests} from '../utils';

export const ADD_GUEST = 'roomSelection/ADD_GUEST'
export const REMOVE_GUEST = 'roomSelection/REMOVE_GUEST'
export const CLEAR_COUNTER = 'roomSelection/CLEAR_COUNTER'

const initialState = {
  defaultDate: {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  },
  guests: [
    {type: 'adult', title: 'Взрослые', counter: 0},
    {type: 'children', title: 'Дети', counter: 0},
    {type: 'babies', title: 'Младенцы', counter: 0}
  ],
  totalGuests: 'Сколько'
}

const roomSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GUEST:
      return {...state, guests: getGuestsCounter(state, action), totalGuests: getTotalGuests(state.guests)}
    case REMOVE_GUEST:
      return {...state, guests: getGuestsCounter(state, action), totalGuests: getTotalGuests(state.guests)}
    case CLEAR_COUNTER:
      return {...state, guests: clearGuestsCounter(state), totalGuests: getTotalGuests(state.guests)}
    default:
      return state
  }
}

export const addGuest = (payload) => ({type: ADD_GUEST, payload})
export const removeGuest = (payload) => ({type: REMOVE_GUEST, payload})
export const clearCounter = () => ({type: CLEAR_COUNTER})

export default roomSelectionReducer
