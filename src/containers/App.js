import React from 'react'
import { connect } from 'react-redux'

import '../../node_modules/picnic/releases/picnic.min.css'

import getVisibleMountains from '../helpers/getVisibleMountains'
import mountains from '../data/mountains'
import { updateSelection } from '../actions'

import CardList from '../components/CardList'
import MarkerList from '../components/MarkerList'
import SearchFilters from '../components/SearchFilters'

const App = (props) => (
  <div className="App flex two">
    <MarkerList {...props}/>
    <div id="filters-container">
      <SearchFilters />
      <CardList {...props}/>
    </div>
  </div>
)

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

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelection: (key, position, showInfoWindow) => {
      dispatch(updateSelection(key, position, showInfoWindow))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
