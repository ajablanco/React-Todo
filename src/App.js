import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import uuid from 'react-uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn About Class Components",
        completed: true
      },
      {
        id: 2,
        title: "Complete React Todo Project",
        completed: false
      },
      {
        id: 3,
        title: "Standup Meeting at 4pm",
        completed: false
      }
    ]
  };

  //Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo ={
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <TodoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
          <TodoForm addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
