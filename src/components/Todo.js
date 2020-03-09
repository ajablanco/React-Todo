import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

class Todo extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: 'rgb(231, 216, 247)',
            padding: '10px',
            border: '1px solid purple',
            fontSize: '1.3rem',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



  render() {
      const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
            </p>
        </div>
    )
  }
}

//Proptypes
Todo.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: 'rgb(195, 124, 233)',
    color: 'white',
    padding: '6px 20px',
    marginRight: '.8%',
    cursor: 'pointer',
    float: 'right',
    fontSize: '1rem'
}
export default Todo;
