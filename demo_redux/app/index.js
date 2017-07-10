import React from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Hello from './containers/Hello'
//import reduxFn from './redux-demo'
//
//reduxFn()

const store = configureStore()

render(
  <Provider store={store}>
    <Hello/>
  </Provider>
  ,
  document.getElementById('root')
)