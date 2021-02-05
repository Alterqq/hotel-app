import {
  ADD_CONVENIENCE,
  ADD_GUEST, CLEAR_CONVENIENCE_COUNTER,
  CLEAR_GUESTS_COUNTER, LOGIN, LOGOUT, REGISTRATION,
  REMOVE_CONVENIENCE,
  REMOVE_GUEST, ROOM_BOOKING, SET_FILTERS,
  SET_ROOM_PROFILE, SET_USER_PROFILE
} from './types'

export const addGuest = (payload) => ({type: ADD_GUEST, payload})
export const removeGuest = (payload) => ({type: REMOVE_GUEST, payload})
export const clearGuestsCounter = () => ({type: CLEAR_GUESTS_COUNTER})
export const addConvenience = (payload) => ({type: ADD_CONVENIENCE, payload})
export const removeConvenience = (payload) => ({type: REMOVE_CONVENIENCE, payload})
export const setRoomProfile = (profile) => ({type: SET_ROOM_PROFILE, payload: profile})
export const clearConvenienceCounter = () => ({type: CLEAR_CONVENIENCE_COUNTER})
export const setFilters = (initialFilters) => ({type: SET_FILTERS, payload: initialFilters})
export const roomBooking = (payload) => ({type: ROOM_BOOKING, payload})
export const setUserProfile = (payload) => ({type: SET_USER_PROFILE, payload})
export const login = () => ({type: LOGIN})
export const logout = () => ({type: LOGOUT})
export const registration = (payload) => ({type: REGISTRATION, payload})

