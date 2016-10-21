import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import './index.css'
import myTheme from './theme'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/index'
let store = createStore(reducer)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>
)

render(
  <Main/>, document.getElementById('root'))
