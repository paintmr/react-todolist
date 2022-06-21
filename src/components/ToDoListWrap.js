import React, { Component } from 'react';

import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FooterContainer from '../containers/FooterContainer';


class ToDoListWrap extends Component {

  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    );
  }

}

export default ToDoListWrap;