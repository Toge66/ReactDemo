import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <p>Home</p>
        <Link to="/list">to List </Link>
      </div>
    )
  }
}