import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { id, completed, text, onClickk } = this.props
    return (
      <li style={{ textDecoration: completed ? "line-through" : "none" }} onClick={onClickk}>{id} {text}</li>
    );
  }
}

export default Todo;