import InputField from 'components/InputField/InputField';
import { Actions, Todo } from 'model';
import React, { useReducer, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import TodoList from 'components/TodoList/TodoList';

const TodoReducer = (state: Todo[], action: Actions): Todo[] => {
  switch (action.type) {
    case 'add':
      return [...state, { id: nanoid(), todo: action.payload, isDone: false }];
    case 'remove':
      return state.filter((todo) => action.payload !== todo.id);
    case 'done':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, todo: action.payload.todo } : todo
      );

    default:
      return state;
  }
};

function App() {
  const [todo, setTodo] = useState('');
  const [state, dispatch] = useReducer(TodoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      dispatch({ type: 'add', payload: todo });
      setTodo('');
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
