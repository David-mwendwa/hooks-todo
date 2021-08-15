import {createContext} from 'react';

const defaultTodos = [
  {id: 1, task: "Mow the lawn using goats", completed: false},
  {id: 2, task: "Release lady bugs to the garden", completed: true},
]

export const TodosContext = createContext(defaultTodos)