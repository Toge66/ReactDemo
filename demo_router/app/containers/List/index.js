import React from 'react'
import { hashHistory } from 'react-router'

export default class List extends React.PureComponent {

  clickHandle(value) {
    hashHistory.push('/detail/' + value)
  }

  render() {
    const a = [1, 2, 3]
    return (
      <div>
        <ul>
          {a.map((item, index) => {
            return <li key={index} onClick={this.clickHandle.bind(this, item)}>jump to detail {item}</li>
          })}
        </ul>
      </div>
    )
  }
}