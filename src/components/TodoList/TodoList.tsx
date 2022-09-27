import SingleTodo from 'components/Todo/SingleTodo';
import { Actions, Todo } from 'model';
import React from 'react';
import styles from './TodoList.module.scss';

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

function TodoList({ todos, dispatch }: Props) {
  return (
    <div className={styles.todos}>
      <ul className={styles.list}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={styles.listItem}>
              <SingleTodo todo={todo} todos={todos} dispatch={dispatch} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
