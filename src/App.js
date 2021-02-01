import React, {useState} from 'react'
import {addDays} from 'date-fns'
import Header from './components/Header/Header'
import {compose} from 'redux';
import {Route, withRouter} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import RoomProfilePage from './pages/RoomProfilePage/RoomProfilePage';
import './App.scss'
import LandingPage from './pages/LandingPage/LandingPage';
import SearchRoomPage from './pages/SearchRoomPage/SearchRoomPage';

const App = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: 'selection'
    }
  ])
  return (
      <div className='app'>
        <Header/>

          <Route exact path="/" render={() => <LandingPage date={date} setDate={setDate}/>}/>
          <Route path="/search" render={() => <SearchRoomPage date={date} setDate={setDate}/>}/>
          <Route path="/rooms/:number" render={() => <RoomProfilePage date={date} setDate={setDate}/>}/>

        <Footer/>
      </div>
  )
}

export default compose(
    withRouter
)(App)
