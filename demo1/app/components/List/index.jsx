import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const data = this.props.todos
    return (
      <ul style={{ marginTop : '20px', fontSize : '14px', lineHeight : '20px' }}>
        {data.map((item, index) => {
          return <li key={index} onClick={this.clickHandle.bind(this, item)}>{item.value}</li>
        })}
      </ul>
    )
  }

  clickHandle(e) {
    this.props.deleteFn(e.id)
  }
}

export default List