import { nanoid } from 'nanoid';
import { useReducer } from 'react';

export interface Todo {
  id: number | string;
  todo: string;
  isDone: boolean;
}

// type Actions =
//   | { type: 'add'; payload: string }
//   | { type: 'remove'; payload: number | string }
//   | { type: 'done'; payload: number | string };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case 'add':
//       return [...state, { id: nanoid(), todo: action.payload, idDone: false }];
//     case 'remove':
//       return state.filter((todo) => action.payload !== todo.id);
//     case 'done':
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
//       );

//     default:
//       return state;
//   }
// };

// const Reducer = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
// };
