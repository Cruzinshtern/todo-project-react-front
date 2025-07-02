import type { Todo } from '../../interfaces/todo.interface';

interface TodoProps {
  todo: Todo;
}
export default function Todo({ todo }: TodoProps) {
  return <>{todo.title}</>;
}
