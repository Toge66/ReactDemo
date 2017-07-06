import React from 'react'
import { render } from 'react-dom'
import RouteMap from './router/routeMap'

import { hashHistory, browserHistory } from 'react-router'
render(<RouteMap history={hashHistory}/>, document.getElementById('root'))









