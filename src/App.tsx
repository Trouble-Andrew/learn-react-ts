import InputField from 'components/InputField/InputField';
import { Todo } from 'modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: nanoid(), isDone: false, todo: todo }]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
