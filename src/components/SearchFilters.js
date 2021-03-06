import React, { Component, PropTypes } from 'react'
import InputRange from 'react-input-range'
import '../../node_modules/react-input-range/dist/react-input-range.css'

import filters from '../data/filters'

class SearchFilters extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = filters
  }

  updateStore() {
    this.props.updateQuery(this.state.query, this.state.show_filters, this.state.filters)
  }

  onQueryChange(event) {
    this.setState({
      query: event.target.value.toLowerCase()
    }, () => {
      this.updateStore()
    })
  }

  toggleFilters(event) {
    this.setState({
      show_filters: !this.state.show_filters
    })
  }

  updateFilter(id, component, value) {
    let current_filters = this.state.filters
    current_filters[id] = value

    this.setState({
      filters: current_filters
    }, () => {
      this.updateStore()
    })
  }

  render() {
    const {show_filters, filters} = this.state
    return (
      <div className="search-filters">
        <div className="query-container">
          <input type="text" name="query" id="query" placeholder="Name of mountain/peak/range" onKeyUp={this.onQueryChange.bind(this)} />
          <label>
            <input type="checkbox" onClick={this.toggleFilters.bind(this)} />
            <span className="checkable">Show Filters</span>
          </label>
        </div>

        <div className={show_filters ? '' : 'hidden'}>
          <ul className="ranges">
            <li>
              <div className="label-text">Elevation</div>
              <div className="flex two">
                <div className="range-container">
                  <InputRange
                    maxValue={15000}
                    minValue={10000}
                    value={filters.elevation_height}
                    labelSuffix=" ft"
                    onChange={this.updateFilter.bind(this, 'elevation_height')}
                  />
                </div>
                <div className="range-container">
                  <InputRange
                    maxValue={5000}
                    minValue={2000}
                    value={filters.elevation_distance}
                    labelSuffix=" m"
                    onChange={this.updateFilter.bind(this, 'elevation_distance')}
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="label-text">Prominence</div>
              <div className="flex two">
                <div className="range-container">
                  <InputRange
                    maxValue={5000}
                    minValue={300}
                    value={filters.prominence_height}
                    labelSuffix=" ft"
                    onChange={this.updateFilter.bind(this, 'prominence_height')}
                  />
                </div>
                <div className="range-container">
                  <InputRange
                    maxValue={3000}
                    minValue={90}
                    value={filters.prominence_distance}
                    labelSuffix=" m"
                    onChange={this.updateFilter.bind(this, 'prominence_distance')}
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="label-text">Isolation</div>
              <div className="flex two">
                <div className="range-container">
                  <InputRange
                    maxValue={700}
                    minValue={1}
                    value={filters.isolation_height}
                    labelSuffix=" mi"
                    onChange={this.updateFilter.bind(this, 'isolation_height')}
                  />
                </div>
                <div className="range-container">
                  <InputRange
                    maxValue={2000}
                    minValue={0}
                    value={filters.isolation_distance}
                    labelSuffix=" km"
                    onChange={this.updateFilter.bind(this, 'isolation_distance')}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

SearchFilters.propTypes = {
  updateQuery: PropTypes.func.isRequired
}

export default SearchFilters
