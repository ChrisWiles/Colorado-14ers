import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

import '../../node_modules/picnic/releases/picnic.min.css'

import getVisibleMountains from '../helpers/getVisibleMountains'
import mountains from '../data/mountains'
import { updateSelection, updateQuery} from '../actions'

import CardList from '../components/CardList'
import MarkerList from '../components/MarkerList'
import SearchFilters from '../components/SearchFilters'

const App = (props) => (
  <div className="App flex two">
    <MarkerList {...props}/>
    <div id="filters-container">
      <SearchFilters updateQuery={props.updateQuery}/>
      <CardList {...props}/>
    </div>
  </div>
)

App.propTypes = {
  mountains: PropTypes.array.isRequired,
  currentSelections: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    mountains: getVisibleMountains(
      mountains,
      state.search.query,
      state.search.filters
    ),
    currentSelections: state.currentSelections
  }
}

export default connect(
  mapStateToProps,
  {updateSelection, updateQuery}
)(App)
