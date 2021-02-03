import React, {useState} from 'react'
import {connect} from 'react-redux'
import DropdownItem from '../DropdownItem/DropdownItem'
import {addConvenience, clearConvenienceCounter, removeConvenience} from '../../redux/actions'
import {getPropString} from '../../utils'
import {getFacilities, getTotalFacilities} from '../../redux/selectors'

const SelectFacilities = ({facilities, addConvenience, removeConvenience, bedrooms, beds, bathrooms, clearConvenienceCounter}) => {
  const [viewFacilities, setViewFacilities] = useState(false)
  const facilitiesString = `
        ${bedrooms} 
        ${getPropString(bedrooms, 'спальня', 'спальни', 'спален')}, 
        ${beds} 
        ${getPropString(beds, 'кровать', 'кровати', 'кроватей')}...
  `
  return (
      <>
        <h3 className='filters__title'>Удобства номера</h3>
        <div
            className='filters__dropdown-input'
            onClick={() => setViewFacilities(!viewFacilities)}
        >
          <span
              className='material-icons arrow-down'>{viewFacilities ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
          {bedrooms === 0 && beds === 0 && bathrooms === 0
              ? 'Выберите удобства'
              : facilitiesString
          }
        </div>
        {viewFacilities && <div className='filters__dropdown'>{facilities.map(convenience => <DropdownItem
            key={convenience.type}
            item={convenience}
            add={addConvenience}
            remove={removeConvenience}/>)}
          <div className='filters__dropdown-buttons'>
            <div onClick={clearConvenienceCounter}>Очистить</div>
            <div onClick={() => setViewFacilities(false)}>Применить</div>
          </div>
        </div>}
      </>
  )
}


const mapStateToProps = state => {
  return {
    facilities: getFacilities(state),
    bedrooms: getTotalFacilities(state).bedrooms,
    beds: getTotalFacilities(state).beds,
    bathrooms: getTotalFacilities(state).bathrooms,
  }
}

export default connect(
    mapStateToProps, {addConvenience, removeConvenience, clearConvenienceCounter}
)(SelectFacilities)
