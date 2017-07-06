import React from 'react'

export default class Header extends React.Component {

  shouldComponentUpdate() {
    console.log("Header shouldComponentUpdate")
  }

  componentDidUpdate() {
    console.log("Header componentDidUpdate")
  }

  componentWillMount() {
    console.log("Header componentWillMount")
  }

  componentDidMount() {
    console.log("Header componentDidMount")
  }

  componentWillUnmount() {
    console.log("Header componentWillUnmount")
  }

  componentDidUnmount() {
    console.log("Header componentDidUnmount")
  }

  render() {
    return (
      <p>{this.props.title}</p>
    )
  }
}