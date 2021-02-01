import small from '../assets/img/room-small.png'
import large1 from '../assets/img/room-large1.png'
import large2 from '../assets/img/room-large2.png'
import large3 from '../assets/img/room-large3.png'
import {addDays} from 'date-fns'

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
    startDate: null,
    endDate: null,
    guests: 0,
    startPrice: 0,
    endPrice: 0,
    withSmoke: false,
    withPets: false,
    withGuests: false,
    withCorridor: false,
    withHelper: false,
    additionally: {
      withBreakfast: false,
      withTable: false,
      withChair: false,
      withCrib: false,
      withTv: false,
      withShampoo: false,
    },
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  },
  profile: null,
  rooms: [
    {
      filter: {
        startDate: addDays(new Date(), 15),
        endDate: addDays(new Date(), 20),
        guests: 4,
        price: 9990,
        withSmoke: false,
        withPets: true,
        withGuests: false,
        withCorridor: true,
        withHelper: true,
        additionally: {
          withBreakfast: true,
          withTable: false,
          withChair: false,
          withCrib: true,
          withTv: true,
          withShampoo: true,
        },
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
      },
      stars: 5,
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
  ]
}

export default initialState
