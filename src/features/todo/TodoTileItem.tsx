import { FiEdit, FiBookmark, FiTrash } from 'react-icons/fi';
import type { TodoInputProp } from '../../interfaces/todo.interface';
import Badge from '../../components/Badge';

export default function TodoTileItem({ todo }: TodoInputProp) {
  return (
    <div className="border p-3 rounded-sm w-1/4">
      <div className="flex justify-end gap-2 top-3 right-3 mb-2">
        <Badge color="blue" size={14}>
          <FiEdit />
        </Badge>
        <Badge color="yellow" size={14}>
          <FiBookmark />
        </Badge>
        <Badge color="red" size={14}>
          <FiTrash />
        </Badge>
      </div>
      <div className="flex gap-2">
        <span>Title:</span>
        <span>{todo.title}</span>
      </div>
      <div className="flex gap-2">
        <span>Description:</span>
        <span>{todo.description || 'N/A'}</span>
      </div>
      <div className="flex gap-2">
        <span>Status:</span>
        <span>{todo.status}</span>
      </div>
      <div className="flex gap-2">
        <span>Created at:</span>
        <span>
          {new Date(todo.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }) || 'N/A'}
        </span>
      </div>
      <div className="flex gap-2">
        <span>Due date:</span>
        <span>
          {new Date(todo.start_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }) || 'N/A'}
        </span>
      </div>
    </div>
  );
}
