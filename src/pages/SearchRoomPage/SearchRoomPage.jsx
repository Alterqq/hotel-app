import React from 'react'
import SearchingResults from '../../components/SearchingResults/SearchingResults'
import './SearchRoomPage.scss'
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import FiltersContainer from '../../components/Filters/FiltersContainer';

const SearchRoomPage = ({date, setDate}) => {
  return (
      <div className='search-room'>
        <div className='search-room__wrapper'>
          <FiltersContainer date={date} setDate={setDate}/>
          <SearchingResults/>
        </div>
      </div>
  )
}

export default withAuthRedirect(SearchRoomPage)
