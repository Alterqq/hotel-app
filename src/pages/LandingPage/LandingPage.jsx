import React from 'react'
import RoomSelection from '../../components/RoomSelection/RoomSelection'
import './LandingPage.scss'

const LandingPage = ({date, setDate}) => {
  return (
      <div className='landing-page'>
        <div className="landing-page__wrapper">
          <RoomSelection date={date} setDate={setDate}/>
          <p>Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
        </div>
      </div>
  )
}

export default LandingPage
