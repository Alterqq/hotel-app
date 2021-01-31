import small from '../assets/img/room-small.png'
import large1 from '../assets/img/room-large1.png'
import large2 from '../assets/img/room-large2.png'
import large3 from '../assets/img/room-large3.png'

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
  totalGuests: 'Сколько',
  facilities: [
    {type: 'bedrooms', title: 'Спальни', counter: 0},
    {type: 'beds', title: 'Кровати', counter: 0},
    {type: 'bathrooms', title: 'Ванные комнаты', counter: 0},
  ],
  totalFacilities: {bedrooms: 0, beds: 0, bathrooms: 0},
  rooms: [
    {
      filter: {
        startDate: '',
        endDate: '',
        guests: 4,
        price: 9990,
        withSmoke: false,
        withPets: true,
        withGuests: false,
        withCorridor: true,
        withHelper: true,
        withBreakfast: true,
        withTable: false,
        withChair: false,
        withCrib: true,
        withTv: true,
        withShampoo: true,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
      },
      stars: 5,
      number: 888,
      isLuxury: true,
      comfort: 'Шумопоглащающие стены',
      convenience: 'Wi-fi в номере',
      cosiness: 'Камин в номере',
      comments: [],
      rules: [
        'Нельзя курить в номере',
        'Без вечеринок и мероприятий',
        'Время прибытия — после 13:00, а выезд до 12:00'
      ],
      cancel: true,
      sprites: {small, large1, large2, large3}
    },
    {
      filter: {
        startDate: '',
        endDate: '',
        guests: 3,
        price: 9990,
        withSmoke: true,
        withPets: false,
        withGuests: false,
        withCorridor: false,
        withHelper: false,
        withBreakfast: true,
        withTable: true,
        withChair: false,
        withCrib: false,
        withTv: false,
        withShampoo: true,
        bedrooms: 1,
        beds: 3,
        bathrooms: 1,
      },
      stars: 4,
      number: 840,
      isLuxury: false,
      comfort: 'Есть балкон',
      convenience: 'Большие окна',
      cosiness: '',
      comments: [],
      rules: [
        'Можно курить в номере',
        'Без вечеринок и мероприятий',
        'Без домашних питомцев'
      ],
      cancel: false,
      sprites: {small, large1, large2, large3}
    },
  ]
}

export default initialState
