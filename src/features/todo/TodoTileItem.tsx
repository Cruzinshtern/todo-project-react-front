import { FiEdit, FiBookmark, FiTrash } from 'react-icons/fi';
import type { TodoInputProp } from '../../interfaces/todo.interface';
import Badge from '../../components/Badge';
import { formatDate } from '../../helpers/formatDate.helper';
import { formatStatus } from '../../helpers/formatStatus.helper';
import Tooltip from '../../components/Tooltip';

export default function TodoTileItem({ todo }: TodoInputProp) {
  return (
    <div className="border p-3 rounded-sm w-1/4">
      <div className="flex justify-end gap-2 top-3 right-3 mb-2">
        <Tooltip content="Edit" position="top" offset={10}>
          <Badge color="blue" size={14}>
            <FiEdit />
          </Badge>
        </Tooltip>
        <Tooltip content="Add to favorites" position="top" offset={10}>
          <Badge color="yellow" size={14}>
            <FiBookmark />
          </Badge>
        </Tooltip>
        <Tooltip content="Delete" position="top" offset={10}>
          <Badge color="red" size={14}>
            <FiTrash />
          </Badge>
        </Tooltip>
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
        <span>{formatStatus(todo.status)}</span>
      </div>
      <div className="flex gap-2">
        <span>Created at:</span>
        <span>{todo.created_at ? formatDate(todo.created_at) : 'N/A'}</span>
      </div>
      <div className="flex gap-2">
        <span>Start date:</span>
        <span>{todo.start_at ? formatDate(todo.start_at) : 'N/A'}</span>
      </div>
    </div>
  );
}
