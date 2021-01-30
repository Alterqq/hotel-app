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
  totalFacilities: {bedrooms: 0, beds: 0, bathrooms: 0}
}

export default initialState
