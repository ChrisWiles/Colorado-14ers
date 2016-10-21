/*
  1. Reducers should be pure functions.
  2. Filtering and sorting items in the state is not the job of the reducer.
*/

import {combineReducers} from 'redux'
import search from './searchReducer'
import currentSelections from './currentSelectionsReducer'

export default combineReducers({search, currentSelections})
