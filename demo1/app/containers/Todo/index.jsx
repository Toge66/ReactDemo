import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Todo extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      todos : []
    }
  }

  render() {
    return (
      <div>
        <Input submitFn={this.submitFn.bind(this)}/>
        <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
      </div>
    )
  }

  submitFn(e) {
    const id = this.state.todos.length
    this.setState({
      todos : this.state.todos.concat({
        id : id,
        value : e
      })
    })
  }

  deleteFn(id) {
    let data = this.state.todos
    this.setState({
      todos : data.filter((item) => {
        return item.id !== id
      })
    })
  }
}

export default Todo