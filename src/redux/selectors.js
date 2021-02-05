import {createSelector} from 'reselect'

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
      rooms.forEach(room => {
        const startRoom = room.filter.startDate.getTime()
        const endRoom = room.filter.endDate.getTime()
        const startUser = filter.startDate.getTime()
        const endUser = filter.endDate.getTime()

        if (startUser >= startRoom && endUser <= endRoom) {
          if (filter.guests <= room.filter.guests) {
            if (room.filter.price >= filter.startPrice
                && room.filter.price <= filter.endPrice) {
              if (filter.bedrooms <= room.filter.bedrooms
                  && filter.beds <= room.filter.beds
                  && filter.bathrooms <= room.filter.bathrooms) {
                if ((filter.withSmoke && room.filter.withSmoke)
                    || !filter.withSmoke) {
                  if ((filter.withPets && room.filter.withPets)
                      || !filter.withPets) {
                    if ((filter.withGuests && room.filter.withGuests)
                        || !filter.withGuests) {
                      if ((filter.withCorridor && room.filter.withCorridor)
                          || !filter.withCorridor) {
                        if ((filter.withHelper && room.filter.withHelper)
                            || !filter.withHelper) {
                          filtered.push(room)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
      return filtered
    })
