import React from "react";


class TodoForm extends React.Component {
    state = {
        title: ''
    }
  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: ''});
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ border: '1px solid purple', display: 'flex', backgroundColor: 'rgb(231, 216, 247)', fontSize: '1.3rem' }}>
        <input 
        type="text" 
        name="title" 
        style={{ flex: '10', padding: '10px', backgroundColor: 'rgb(231, 216, 247)', fontSize: '1.3rem' }}
        placeholder="   Add Todo..."
        value={this.state.title} 
        onChange={this.onChange}/>
        <input 
        type="submit" 
        value="Submit" 
        className="btn" 
        style={{ flex: '1' }}/>

      </form>
    );
  }
}


export default TodoForm;
