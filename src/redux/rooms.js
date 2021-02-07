import {addDays} from "date-fns";
import small from '../assets/img/room-small.png';
import large1 from '../assets/img/room-large1.png';
import large2 from '../assets/img/room-large2.png';
import large3 from '../assets/img/room-large3.png';

export const rooms = [
  {
    filter: {
      dates: [
        {startDate: addDays(new Date(), 5), endDate: addDays(new Date(), 7)},
        {startDate: addDays(new Date(), 8), endDate: addDays(new Date(), 10)},
        {startDate: addDays(new Date(), 3), endDate: addDays(new Date(), 4)},
      ],
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
      dates: [
        {startDate: addDays(new Date(), 0), endDate: addDays(new Date(), 2)},
        {startDate: addDays(new Date(), 10), endDate: addDays(new Date(), 12)},
        {startDate: addDays(new Date(), 15), endDate: addDays(new Date(), 21)},
      ],
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
      dates: [
        {startDate: addDays(new Date(), 8), endDate: addDays(new Date(), 11)},
        {startDate: addDays(new Date(), 3), endDate: addDays(new Date(), 4)},
        {startDate: addDays(new Date(), 12), endDate: addDays(new Date(), 15)},
      ],
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
      dates: [
        {startDate: addDays(new Date(), 21), endDate: addDays(new Date(), 23)},
        {startDate: addDays(new Date(), 14), endDate: addDays(new Date(), 19)},
        {startDate: addDays(new Date(), 7), endDate: addDays(new Date(), 8)},
      ],
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
      dates: [
        {startDate: addDays(new Date(), 9), endDate: addDays(new Date(), 11)},
        {startDate: addDays(new Date(), 25), endDate: addDays(new Date(), 28)},
        {startDate: addDays(new Date(), 32), endDate: addDays(new Date(), 35)},
      ],
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
      dates: [
        {startDate: addDays(new Date(), 14), endDate: addDays(new Date(), 18)},
        {startDate: addDays(new Date(), 38), endDate: addDays(new Date(), 42)},
        {startDate: addDays(new Date(), 7), endDate: addDays(new Date(), 8)},
      ],
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
      dates: [
        {startDate: addDays(new Date(), 25), endDate: addDays(new Date(), 27)},
        {startDate: addDays(new Date(), 1), endDate: addDays(new Date(), 2)},
        {startDate: addDays(new Date(), 3), endDate: addDays(new Date(), 5)},
      ],
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
  {
    filter: {
      dates: [
        {startDate: addDays(new Date(), 6), endDate: addDays(new Date(), 10)},
        {startDate: addDays(new Date(), 3), endDate: addDays(new Date(), 4)},
        {startDate: addDays(new Date(), 12), endDate: addDays(new Date(), 15)},
      ],
      guests: 6,
      price: 10800,
      withSmoke: false,
      withPets: true,
      withGuests: true,
      withCorridor: true,
      withHelper: false,
      bedrooms: 2,
      beds: 4,
      bathrooms: 2,
    },
    stars: 5,
    number: 347,
    isLuxury: true,
    comfort: 'Толстые стены',
    convenience: 'Какой-то текст',
    cosiness: 'И еще какой-то текст',
    rules: [
      'Нельзя курить в номере',
      'Eще какое-то правило',
      'Время прибытия — после 13:00, а выезд до 12:00'
    ],
    cancel: true,
    sprites: {small, large1, large2, large3},
    votes: [48, 24, 11, 3]
  },
  {
    filter: {
      dates: [
        {startDate: addDays(new Date(), 7), endDate: addDays(new Date(), 8)},
        {startDate: addDays(new Date(), 10), endDate: addDays(new Date(), 15)},
        {startDate: addDays(new Date(), 20), endDate: addDays(new Date(), 21)},
      ],
      guests: 3,
      price: 6700,
      withSmoke: false,
      withPets: false,
      withGuests: false,
      withCorridor: false,
      withHelper: false,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
    },
    stars: 4,
    number: 876,
    isLuxury: false,
    comfort: '',
    convenience: 'Тут про удобства',
    cosiness: 'А тут про уют',
    rules: [
      'Нельзя курить в номере',
      'Eще какое-то правило',
      'И еще одно',
      'Правило про заезд в номер'
    ],
    cancel: false,
    sprites: {small, large1, large2, large3},
    votes: [78, 65, 22, 8]
  },
  {
    filter: {
      dates: [
        {startDate: addDays(new Date(), 1), endDate: addDays(new Date(), 2)},
        {startDate: addDays(new Date(), 15), endDate: addDays(new Date(), 18)},
        {startDate: addDays(new Date(), 21), endDate: addDays(new Date(), 23)},
      ],
      guests: 4,
      price: 7200,
      withSmoke: true,
      withPets: true,
      withGuests: false,
      withCorridor: false,
      withHelper: false,
      bedrooms: 2,
      beds: 3,
      bathrooms: 1,
    },
    stars: 4,
    number: 965,
    isLuxury: false,
    comfort: 'Тут про комфорт',
    convenience: 'Тут про удобства',
    cosiness: 'А тут про уют',
    rules: [
      'Правило 1',
      'Правило 2',
      'Правило 3',
      'Правило про заезд в номер'
    ],
    cancel: true,
    sprites: {small, large1, large2, large3},
    votes: [45, 57, 11, 1]
  },
  {
    filter: {
      dates: [
        {startDate: addDays(new Date(), 9), endDate: addDays(new Date(), 13)},
        {startDate: addDays(new Date(), 21), endDate: addDays(new Date(), 25)},
        {startDate: addDays(new Date(), 15), endDate: addDays(new Date(), 16)},
      ],
      guests: 2,
      price: 5200,
      withSmoke: true,
      withPets: false,
      withGuests: false,
      withCorridor: false,
      withHelper: false,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    stars: 5,
    number: 426,
    isLuxury: true,
    comfort: 'Тут про комфорт',
    convenience: 'Тут про удобства',
    cosiness: 'А тут про уют',
    rules: [
      'Правило 1',
      'Правило 2',
      'Правило 3',
      'Правило про заезд в номер'
    ],
    cancel: true,
    sprites: {small, large1, large2, large3},
    votes: [95, 48, 10, 0]
  },
]
