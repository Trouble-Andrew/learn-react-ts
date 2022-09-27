import { Actions, Todo } from 'model';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import styles from './SingleTodo.module.scss';

interface Props {
  todo: Todo;
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

function SingleTodo({ todo, dispatch }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleEdit(e: React.FormEvent, id: number | string) {
    e.preventDefault();
    dispatch({ type: 'edit', payload: { ...todo, todo: editTodo } });
    setIsEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <form action="" className={styles.form} onSubmit={(e) => handleEdit(e, todo.id)}>
      {isEdit ? (
        <input
          type="text"
          value={editTodo}
          className={styles.editInput}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <span className={`${todo.isDone ? styles.done : ''} ${styles.text}`}>{todo.todo}</span>
      )}

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            if (!isEdit && !todo.isDone) {
              setIsEdit(!isEdit);
            }
          }}
        >
          <AiFillEdit />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            dispatch({ type: 'remove', payload: todo.id });
          }}
        >
          <AiFillDelete />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            dispatch({ type: 'done', payload: todo.id });
          }}
        >
          <MdDone />
        </button>
      </div>
    </form>
  );
}

export default SingleTodo;
