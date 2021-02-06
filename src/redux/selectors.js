import {createSelector} from 'reselect'
import {checkBooleanRoom, checkFreeRoom} from '../utils';

export const getRooms = (state) => state.roomSelection.rooms
export const getDefaultDate = (state) => state.roomSelection.defaultDate
export const getTotalGuests = (state) => state.roomSelection.totalGuests
export const getFilter = (state) => state.roomSelection.filter
export const getRoomProfile = (state) => state.roomSelection.roomProfile
export const getFacilities = (state) => state.roomSelection.facilities
export const getTotalFacilities = (state) => state.roomSelection.totalFacilities
export const getGuests = (state) => state.roomSelection.guests
export const getUsers = (state) => state.auth.users
export const getUserProfile = (state) => state.auth.userProfile
export const getAuth = (state) => state.auth.isAuth

export const filteredRooms = createSelector(getRooms, getFilter,
    (rooms, filter) => {
      const filtered = []
      const booleanKeys = [
        'withSmoke',
        'withPets',
        'withGuests',
        'withCorridor',
        'withHelper',
      ]
      rooms.forEach(room => {
        const roomDates = room.filter.dates
        const startUser = filter.startDate
        const endUser = filter.endDate
        if (checkFreeRoom(startUser, endUser, roomDates)) {
          if (filter.guests <= room.filter.guests) {
            if (room.filter.price >= filter.startPrice
                && room.filter.price <= filter.endPrice) {
              if (filter.bedrooms <= room.filter.bedrooms
                  && filter.beds <= room.filter.beds
                  && filter.bathrooms <= room.filter.bathrooms) {
                if (checkBooleanRoom(booleanKeys, room, filter)) {
                  filtered.push(room)
                }
              }
            }
          }
        }
      })
      return filtered
    })

