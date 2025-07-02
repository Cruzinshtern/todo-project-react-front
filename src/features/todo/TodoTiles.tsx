import type { Todo, TodoTilesInputProp } from '../../interfaces/todo.interface';
import TodoTileItem from './TodoTileItem';

export default function TodoTiles({ todos }: TodoTilesInputProp) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {todos?.map((todo: Todo) => {
        return <TodoTileItem key={todo._id} todo={todo} />;
      })}
    </div>
  );
}
