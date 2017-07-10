import React from 'react'

export default class A extends React.PureComponent {
  render() {
    return (
      <p>{this.props.userinfo.userid}</p>
    )
  }
}