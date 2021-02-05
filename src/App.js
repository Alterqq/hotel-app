import React, {useState} from 'react'
import {addDays} from 'date-fns'
import Header from './components/Header/Header'
import {compose} from 'redux'
import {Route, withRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import RoomProfilePage from './pages/RoomProfilePage/RoomProfilePage'
import LandingPage from './pages/LandingPage/LandingPage'
import SearchRoomPage from './pages/SearchRoomPage/SearchRoomPage'
import './App.scss'
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const App = () => {
  const [date, setDate] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 5),
      key: 'selection'
    }
  ])
  return (
      <div className='app'>
        <Header/>

          <Route exact path="/" render={() => <LandingPage date={date} setDate={setDate}/>}/>
          <Route path="/search" render={() => <SearchRoomPage date={date} setDate={setDate}/>}/>
          <Route path="/rooms/:number" render={() => <RoomProfilePage date={date} setDate={setDate}/>}/>
          <Route path="/login" render={() => <LoginPage />}/>
          <Route path="/registration" render={() => <RegisterPage />}/>

        <Footer/>
      </div>
  )
}

export default compose(
    withRouter
)(App)
