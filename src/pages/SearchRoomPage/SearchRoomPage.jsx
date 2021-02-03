import React from 'react'
import Filters from '../../components/Filters/Filters'
import SearchingResults from '../../components/SearchingResults/SearchingResults'
import './SearchRoomPage.scss'

const SearchRoomPage = ({date, setDate}) => {
  return (
      <div className='search-room'>
        <div className='search-room__wrapper'>
          <Filters date={date} setDate={setDate}/>
          <SearchingResults/>
        </div>
      </div>
  )
}

export default SearchRoomPage
