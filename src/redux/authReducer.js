import {LOGIN, LOGOUT, REGISTRATION, SET_USER_PROFILE} from './types';

const initialState = {
  users: [
    {
      firstName: 'Юлий',
      lastName: 'Цезарь',
      sex: 'male',
      birthDate: new Date(1988, 8, 12),
      email: 'caesar@rome.it',
      password: 'caesar1337',
      subscribe: true
    }
  ],
  userProfile: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false, userProfile: null}
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      }
    case REGISTRATION:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

export default authReducer
