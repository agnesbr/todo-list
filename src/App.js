import React, { Component } from 'react'
import Form from './Form'
import Todo from './Todo'
import './App.css'

class App extends Component {
  todoList = ['Aufgabe1', 'Aufgabe2', 'Aufgabe3']

  render() {
    return (
      <section className="App">
        <Form />
        {this.todoList.map(todoItem => (
          <Todo todoItem={todoItem} />
        ))}
      </section>
    )
  }
}

export default App
