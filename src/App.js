import React from "react"
import './App.scss'
import Header from './components/Header/Header'
import RoomSelection from './components/RoomSelection/RoomSelection';

function App() {
  return (
      <div className='app'>
        <div className='wrapper'>
          <Header/>

          <RoomSelection/>

        </div>
      </div>
  )
}

export default App;
