import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Input extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      value : ''
    }
  }

  render() {
    return (
      <div>
        <input style={{ width : '100%', height : '40px', fontSize : '30px' }}
               value={this.state.value}
               onChange={this.changeHandle.bind(this)}
               onKeyUp={this.keyUpHandle.bind(this)}/>
      </div>
    )
  }

  changeHandle(e) {
    this.setState({ value : e.target.value })
  }

  keyUpHandle(e) {
    const value = this.state.value
    if (e.keyCode === 13 && value.trim()) {
      this.props.submitFn(value)
      this.setState({ value : '' })
    }
  }
}

export default Input