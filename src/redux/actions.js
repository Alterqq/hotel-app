import {ADD_CONVENIENCE, ADD_GUEST, CLEAR_GUESTS_COUNTER, REMOVE_CONVENIENCE, REMOVE_GUEST} from './types';

export const addGuest = (payload) => ({type: ADD_GUEST, payload})
export const removeGuest = (payload) => ({type: REMOVE_GUEST, payload})
export const clearCounter = () => ({type: CLEAR_GUESTS_COUNTER})
export const addConvenience = (payload) => ({type: ADD_CONVENIENCE, payload})
export const removeConvenience = (payload) => ({type: REMOVE_CONVENIENCE, payload})
