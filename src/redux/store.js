import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import ReduxThunk  from 'redux-thunk'
import roomSelectionReducer from './roomSelectionReducer'
import authReducer from './authReducer'
import {storage} from './localStorage';

const persistedState = storage() ? JSON.parse(storage()) : {}

const rootReducer = combineReducers({
  roomSelection: roomSelectionReducer,
  auth: authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(ReduxThunk)))

export default store
