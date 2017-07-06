import React from 'react'

export default class Detail extends React.PureComponent {
  render() {
    const { id } = this.props.params
    console.log(id)
    return (
      <p>Detail {id}</p>
    )
  }
}