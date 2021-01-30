import React, {useState} from "react"
import './App.scss'
import Header from './components/Header/Header'
import SearchRoomPage from './pages/SearchRoomPage/SearchRoomPage';
import {addDays} from "date-fns";

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
          <SearchRoomPage date={date} setDate={setDate}/>
      </div>
  )
}

export default App;
