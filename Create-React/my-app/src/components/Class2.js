import React, { Component } from 'react'

export default class Class2 extends Component {
  render() {
    return (
      <div>
        <h1> Class2 {this.props.match.params.id}</h1>
      </div>
    )
  }
}
