import {ADD_GUEST, REMOVE_GUEST} from './redux/roomSelectionReducer';

export const getGuestsCounter = (state, action) => {
  return state.guests.map(guest => {
    if (guest.type === action.payload.type) {
      if (action.type === ADD_GUEST) guest.counter++
      else if (action.type === REMOVE_GUEST && guest.counter > 0) guest.counter--
    }
    return guest
  })
}

export const clearGuestsCounter = (state) => {
  return state.guests.map(guest => {
    guest.counter = 0
    return guest
  })
}

export const getTotalGuests = guests => {
  return guests.reduce((acc, guest) => {
    acc += guest.counter
    return acc
  }, 0)
}

export const getGuestString = num => {
  const str = String(num).slice(-2)
  if (!str[1]) {
    if (str === '1') return 'гость'
    else if (str === '2' || str === '3' || str === '4') return 'гостя'
  }
  if (str === '11' || str === '12' || str === '13' || str === '14') return 'гостей'
  else if (str[1] === '1') return 'гость'
  else if (str[1] === '2' || str[1] === '3' || str[1] === '4') return 'гостя'
  return 'гостей'
}
