import React from 'react'
import Header from '../../components/Header'
import Carousel from './subpages/Carousel'
import List from './subpages/List'
import Recommend from './subpages/Recommend'

export default  class Hello extends React.Component {



  render() {
    return (
      <div>
        <Header title="hello 页面"></Header>
        <hr/>
        <Carousel/>
        <Recommend/>
        <List/>
      </div>
    )
  }
}