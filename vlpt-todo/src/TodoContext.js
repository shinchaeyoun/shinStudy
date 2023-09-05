/* eslint-disable */
import React, { useReducer } from 'react';

const initialTodos = [
  {
    id: 1,
    text: 'create project',
    done: true
  },
  {
    id: 2,
    text: 'components styling',
    done: true
  },
  {
    id: 3,
    text: 'Context make'
  },
  {
    id: 4,
    text: 'object 4',
    done: false
  }
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${active.type}`);
  }
};

const TodoStateContext = ceeateContext();
const TodoDispatchContext = createContext();


export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}