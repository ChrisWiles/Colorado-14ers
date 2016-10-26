import React from 'react'
import Card from './Card'


const CardList = ({mountains, updateSelection}) => (
  <div id="search-results" className="flex three">
    {mountains.map((row, key) =>
    	<Card data={row} key={key} updateSelection={updateSelection}/>
    )}
  </div>
)

export default CardList
