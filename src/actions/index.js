/*
  Actions are payloads of information that send data from your application to
  your store. They are the only source of information for the store.
  http://redux.js.org/docs/basics/Actions.html
*/
export const updateSelection = (key, position, showInfoWindow) => {
  return {
    type: 'UPDATE_SELECTION',
    key,
    position,
    showInfoWindow
  }
}

export const updateQuery = (query, show_filters, filters) => {
  return {
    type: 'UPDATE_QUERY',
    query,
    show_filters,
    filters
  }
}
