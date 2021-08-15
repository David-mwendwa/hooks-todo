import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { TodosProvider } from './context/todos.context';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || [])
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa',
        }}
        elevation={0}>
        <AppBar color='primary' position='static' style={{ height: '64px' }}>
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodosProvider>
              <TodoForm addTodo={addTodo} />
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TodoApp;
