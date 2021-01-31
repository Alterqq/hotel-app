import React, {useState} from 'react'
import {addDays} from 'date-fns'
import Header from './components/Header/Header'
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import RoomProfilePage from './pages/RoomProfilePage/RoomProfilePage';
import './App.scss'

const App = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ])
  return (
      <div className='app'>
        <Header/>
        {/*<Switch>*/}
        {/*  <Route exact path="/" render={() => <LandingPage date={date} setDate={setDate}/>}/>*/}
        {/*  <Route path="/search" render={() => <SearchRoomPage date={date} setDate={setDate}/>}/>*/}
        {/*</Switch>*/}
        <RoomProfilePage date={date} setDate={setDate}/>
        <Footer/>
      </div>
  )
}

export default compose(
    withRouter
)(App)
