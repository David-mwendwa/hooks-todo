import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import Todo from './Todo';
import { TodosContext } from './context/todos.context';

const TodoList = () => {
  const {todos} = useContext(TodosContext)
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
    return null
};

export default TodoList;
