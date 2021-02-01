
export const getCounter = (state, action, key, addType, removeType) => {
  return state[key].map(item => {
    if (item.type === action.payload.type) {
      if (action.type === addType) item.counter++
      else if (action.type === removeType && item.counter > 0) item.counter--
    }
    return item
  })
}

export const clearCounter = (state, key) => {
  return state[key].map(item => {
    item.counter = 0
    return item
  })
}

export const getTotalGuests = guests => {
  return guests.reduce((acc, guest) => {
    acc += guest.counter
    return acc
  }, 0)
}

export const getPropString = (num, oneProp, twoFourProp, defaultProp) => {
  const str = String(num).slice(-2)
  if (!str[1]) {
    if (str === '1') return oneProp
    else if (str === '2' || str === '3' || str === '4') return twoFourProp
  }
  if (str === '11' || str === '12' || str === '13' || str === '14') return defaultProp
  else if (str[1] === '1') return oneProp
  else if (str[1] === '2' || str[1] === '3' || str[1] === '4') return twoFourProp
  return defaultProp
}

export const getShortMonthName = (date, key) => {
  return date[0][key].toLocaleDateString('ru', {month: 'short'}).slice(0, -1)
}

export const getDay = (date, key) => {
  return date[0][key].getDate()
}

export const getTotalFacilities = (facilities, total) => {
  facilities.forEach(c => {
    total[c.type] = c.counter
  })
  return total
}

export const getStars = (stars) => {
  const arr = []
  for (let i = 0; i < 5; i++) {
    arr.push({value: `${stars > i ? 'star' : 'star_border'}`, id: i})
  }
  return arr
}

export const setRoom = (rooms, number, dispatch) => {
  rooms.find(room => room.number === +number && dispatch(room))
}

export const getAllVotes = (votes) => {
  return votes.reduce((acc, item) => acc + item)
}

export const getDiffDays = (start, end) => {
  const t2 = end.getTime()
  const t1 = start.getTime()
  return parseInt((t2-t1)/(24*3600*1000))
}

export const getAdditionallyCount = (additionally) => {
  let counter = 0
  const keys = Object.keys(additionally)
  keys.forEach(key => {
    if (additionally[key] === true) counter++
  })
  return counter
}
