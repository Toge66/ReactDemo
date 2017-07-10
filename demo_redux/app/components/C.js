import React from 'react'
export default class C extends React.PureComponent {
  render() {
    return (
      <div>
        <button onClick={this.changeUserinfo.bind(this)}> ChangeUser</button>
        <button onClick={this.changeCity.bind(this)}> ChangeCity</button>
      </div>
    )
  }

  changeUserinfo() {
    const actions = this.props.actions
    actions.login({
      userid : '24',
      city : 'beijing'
    })
  }

  changeCity() {
    const actions = this.props.actions
    actions.updateCityName({
      userid : "dddd",
      city : "山东"
    })
  }
}