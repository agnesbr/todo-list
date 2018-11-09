import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { todoItem } = this.props
    return <li>{todoItem}</li>
  }
}

export default Todo
