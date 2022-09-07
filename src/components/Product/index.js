import React, { Component } from 'react'

export default class Product extends Component{
  render(){
    return(
      <div  style={{
        backgroundColor: 'rgba(152, 241, 237, 0.3)',
        width:'500px', margin:'0px auto'
      }}>
        <h4>product name: {this.props.name}</h4>
        <p>category: {this.props.category}</p>
        <p>description: {this.props.description}</p>
        <p>price: ${this.props.price}</p>
      </div>
    )
  }

}
