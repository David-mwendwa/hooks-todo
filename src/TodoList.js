import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
