/*
  Reducers are responsible for specifying how the store
  changes when a specific action is received.

  currentSelectionsReducer returns the state which stores
  the data for the currently hovered mountain.
*/

let default_state = {
	key: null,
	position: null,
	showInfoWindow: false
}

export default function currentSelectionsReducer (state = default_state, action) {
	if (action.type === 'UPDATE_SELECTION') {
		return {
			key: action.key,
			position: action.position,
			showInfoWindow: action.showInfoWindow
		}
	}
	return state
}
