import SingleTodo from 'components/Todo/SingleTodo';
import { Todo } from 'model';
import React from 'react';
import styles from './TodoList.module.scss';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <div className={styles.todos}>
      <ul className={styles.list}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={styles.listItem}>
              <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
