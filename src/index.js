import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import './index.scss'
import {storage} from './redux/localStorage';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
store.subscribe(()=> {
  storage(store)
})
reportWebVitals()
