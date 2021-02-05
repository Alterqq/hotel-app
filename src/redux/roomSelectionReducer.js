import {clearCounter, getCounter, setTotalFacilities, setTotalGuests} from '../utils'
import {
  ADD_CONVENIENCE,
  ADD_GUEST, CLEAR_CONVENIENCE_COUNTER,
  CLEAR_GUESTS_COUNTER,
  REMOVE_CONVENIENCE,
  REMOVE_GUEST, ROOM_BOOKING, SET_FILTERS,
  SET_ROOM_PROFILE
} from './types'
import {addDays} from "date-fns";
import small from '../assets/img/room-small.png';
import large1 from '../assets/img/room-large1.png';
import large2 from '../assets/img/room-large2.png';
import large3 from '../assets/img/room-large3.png';

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
  rooms: [
    {
      filter: {
        startDate: addDays(new Date(), 0),
        endDate: addDays(new Date(), 15),
        guests: 4,
        price: 9990,
        withSmoke: false,
        withPets: true,
        withGuests: false,
        withCorridor: true,
        withHelper: true,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
      },
      stars: 4,
      number: 888,
      isLuxury: true,
      comfort: 'Толстые стены',
      convenience: 'Wi-fi в номере',
      cosiness: 'Камин в номере',
      rules: [
        'Нельзя курить в номере',
        'Без вечеринок и мероприятий',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: true,
      sprites: {small, large1, large2, large3},
      votes: [100, 70, 50, 10]
    },
    {
      filter: {
        startDate: addDays(new Date(), 0),
        endDate: addDays(new Date(), 10),
        guests: 3,
        price: 8990,
        withSmoke: true,
        withPets: false,
        withGuests: false,
        withCorridor: false,
        withHelper: false,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
      },
      stars: 4,
      number: 840,
      isLuxury: false,
      comfort: '',
      convenience: 'Большая ванная комната',
      cosiness: 'Камин в номере',
      rules: [
        'Без домашних питомцев',
        'Без вечеринок и мероприятий',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: false,
      sprites: {small, large1, large2, large3},
      votes: [70, 60, 30, 5]
    },
    {
      filter: {
        startDate: addDays(new Date(), 3),
        endDate: addDays(new Date(), 8),
        guests: 6,
        price: 12500,
        withSmoke: true,
        withPets: true,
        withGuests: true,
        withCorridor: true,
        withHelper: true,
        bedrooms: 3,
        beds: 6,
        bathrooms: 2,
      },
      stars: 5,
      number: 685,
      isLuxury: true,
      comfort: 'Панорамные окна',
      convenience: 'Большая площадь номера',
      cosiness: 'Вид из окна на сад',
      rules: [
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: true,
      sprites: {small, large1, large2, large3},
      votes: [30, 10, 8, 2]
    },
    {
      filter: {
        startDate: addDays(new Date(), 12),
        endDate: addDays(new Date(), 18),
        guests: 2,
        price: 4800,
        withSmoke: false,
        withPets: false,
        withGuests: false,
        withCorridor: false,
        withHelper: false,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
      },
      stars: 3,
      number: 286,
      isLuxury: false,
      comfort: '',
      convenience: '',
      cosiness: 'Идеально подходит для пар',
      rules: [
        'Нельзя курить в номере',
        'Без вечеринок и мероприятий',
        'Без домашних питомцев',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: false,
      sprites: {small, large1, large2, large3},
      votes: [50, 65, 45, 10]
    },
    {
      filter: {
        startDate: addDays(new Date(), 13),
        endDate: addDays(new Date(), 21),
        guests: 4,
        price: 7600,
        withSmoke: false,
        withPets: true,
        withGuests: true,
        withCorridor: false,
        withHelper: false,
        bedrooms: 1,
        beds: 3,
        bathrooms: 1,
      },
      stars: 4,
      number: 487,
      isLuxury: false,
      comfort: 'Толстые стены',
      convenience: 'Wi-fi в номере',
      cosiness: 'Подходит для семей с детьми',
      rules: [
        'Нельзя курить в номере',
        'Без вечеринок и мероприятий',
        'Без домашних питомцев',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: true,
      sprites: {small, large1, large2, large3},
      votes: [90, 65, 32, 12]
    },
    {
      filter: {
        startDate: addDays(new Date(), 3),
        endDate: addDays(new Date(), 15),
        guests: 5,
        price: 8900,
        withSmoke: true,
        withPets: true,
        withGuests: false,
        withCorridor: true,
        withHelper: true,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
      },
      stars: 5,
      number: 758,
      isLuxury: true,
      comfort: 'Толстые стены',
      convenience: 'Wi-fi в номере',
      cosiness: 'Камин в номере',
      rules: [
        'Без вечеринок и мероприятий',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: true,
      sprites: {small, large1, large2, large3},
      votes: [35, 12, 8, 3]
    },
    {
      filter: {
        startDate: addDays(new Date(), 6),
        endDate: addDays(new Date(), 17),
        guests: 3,
        price: 3600,
        withSmoke: false,
        withPets: false,
        withGuests: false,
        withCorridor: false,
        withHelper: false,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
      },
      stars: 2,
      number: 178,
      isLuxury: false,
      comfort: '',
      convenience: 'Номер на первом этаже',
      cosiness: '',
      rules: [
        'Нельзя курить в номере',
        'Без вечеринок и мероприятий',
        'Без домашних питомцев',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: false,
      sprites: {small, large1, large2, large3},
      votes: [10, 20, 15, 10]
    },
  ]
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
            const keys = Object.keys(room.filter)
            keys.forEach(key => {
              if (action.payload[key]) {
                room.filter[key] = action.payload[key]
              }
            })
          }
          return room
        })
      }

    default:
      return state
  }
}

export default roomSelectionReducer
