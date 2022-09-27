export interface Todo {
  id: number | string;
  todo: string;
  isDone: boolean;
}

export type Actions =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number | string }
  | { type: 'edit'; payload: Todo }
  | { type: 'done'; payload: number | string };
