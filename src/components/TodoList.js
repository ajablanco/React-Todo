import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends React.Component {

  render() {
    return this.props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

//Proptypes
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
