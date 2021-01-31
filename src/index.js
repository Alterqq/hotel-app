import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/store'
import './index.scss'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

reportWebVitals()
