import React, { useRef } from 'react';
import styles from './InputField.module.scss';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      className={styles.input}
      onSubmit={(e) => {
        inputRef.current?.blur();
        handleAdd(e);
      }}
    >
      <input
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={`form-control form-control-lg ${styles.inputBox}`}
        ref={inputRef}
      />
      <button type="submit" className={`btn btn-primary ${styles.button}`}>
        Go
      </button>
    </form>
  );
}

export default InputField;
