import React from 'react'
import { render } from 'react-dom'
import RouteMap from './router/routeMap'

import { hashHistory } from 'react-router'
render(<RouteMap history={hashHistory}></RouteMap>, document.getElementById('root'))