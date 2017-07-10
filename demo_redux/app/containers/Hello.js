import React from 'react'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import * as actions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.PureComponent {
  render() {
    return (
      <div>
        <p>Hello world!!!</p>
        <hr/>
        <A userinfo={this.props.userinfo}/>
        <hr/>
        <B userinfo={this.props.userinfo}/>
        <hr/>
        <C actions={this.props.userinfoActions}/>
      </div>
    )
  }

  componentDidMount() {
    this.props.userinfoActions.login({
      userid : 'abd',
      city : 'shandong'
    })
  }
}

function mapStateToProps(state) {
  return {
    userinfo : state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions : bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)















