/*
  Reducers are responsible for specifying how the store
  changes when a specific action is received.

  searchReducer returns the state which stores the data for the user’s
  query and filters. This uses the data from the data/filters.js
  file as its initial data.
*/

import filters from '../data/filters'

export default function searchReducer (state = filters, action) {
    if (action.type === 'UPDATE_QUERY') {
        return {
            query: action.query,
            show_filters: action.show_filters,
            filters: action.filters
        }
    }
    return state
}
