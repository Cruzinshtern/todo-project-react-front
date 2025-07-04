import { FiEdit, FiBookmark, FiTrash } from 'react-icons/fi';
import Badge from '../../components/Badge';
import { getValueByKey } from '../../helpers/getValueByKey.helper';
import type { TableColumn } from '../../interfaces/table.interface';
import type { Todo, TodoTableInputProp } from '../../interfaces/todo.interface';
import { formatDate } from '../../helpers/formatDate.helper';
import { formatStatus } from '../../helpers/formatStatus.helper';
import Tooltip from '../../components/Tooltip';

export default function TodoTable({
  todos,
  tableClass,
  columns,
  showActions = false,
  onDeleteTodo,
  isDeleting,
}: TodoTableInputProp) {
  return (
    <table className={`divide-y divide-gray-200 border border-gray-300 ${tableClass || ''}`}>
      <thead>
        <tr>
          {columns?.map((column: TableColumn, index: number) => {
            return (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 ${index < columns.length - 1 ? 'border-r border-gray-300' : ''}`}
              >
                {column.value}
              </th>
            );
          })}
          {showActions && <th className="border-l border-gray-300 w-[200px]">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo: Todo) => {
          return (
            <tr key={todo._id}>
              {columns.map((column: TableColumn, index: number) => {
                const value = getValueByKey(todo, column.key as keyof Todo); // column.key type assertion
                let displayValue: React.ReactNode = value as React.ReactNode; // assert to React.ReactNode for render

                // Formatting dates
                if (
                  (column.key === 'created_at' || column.key === 'start_at') &&
                  typeof value === 'string' &&
                  value
                ) {
                  displayValue = formatDate(value);
                }

                // Formatting status
                if (column.key === 'status' && typeof value === 'number' && value) {
                  displayValue = formatStatus(value);
                }

                return (
                  <td
                    key={todo._id + column.key}
                    className={`px-6 py-4 
                      ${index < columns.length - 1 ? 'border-r border-gray-200' : ''} 
                      ${index < todos.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    {displayValue}
                  </td>
                );
              })}
              {showActions && (
                <td className="px-6 py-4 border-l border-b border-gray-200">
                  <div className="flex gap-2 justify-center">
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
                      <Badge color="red" size={14} onClick={() => onDeleteTodo(todo._id)}>
                        <FiTrash />
                      </Badge>
                    </Tooltip>
                  </div>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
