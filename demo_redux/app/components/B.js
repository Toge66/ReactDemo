import React from 'react'

export default class B extends React.PureComponent {
  render() {
    return (
      <p>{this.props.userinfo.city}</p>
    )
  }
}