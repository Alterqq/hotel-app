import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import roomSelectionReducer from './roomSelectionReducer'
import authReducer from './authReducer';

const rootReducer = combineReducers({
  roomSelection: roomSelectionReducer,
  auth: authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store
export default store
