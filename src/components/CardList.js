import React, {PropTypes} from 'react'
import Card from './Card'


const CardList = ({mountains, updateSelection}) => (
  <div id="search-results" className="flex three">
    {mountains.map((row, key) =>
    	<Card data={row} key={key} updateSelection={updateSelection}/>
    )}
  </div>
)

CardList.propTypes = {
  mountains: PropTypes.array.isRequired,
  updateSelection: PropTypes.func.isRequired
}

export default CardList
