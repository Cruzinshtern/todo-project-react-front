import { TodoStatusEnum } from '../interfaces/todo.interface';
/**
 *
 * @param status Todo status (e.g. 1 or 2 or 3 etc)
 * @returns Formatted status (e.g. 'Todo', 'Active', 'Done')
 */
export function formatStatus(status: number): string {
  switch (status) {
    case TodoStatusEnum.TODO:
      return 'Todo';
    case TodoStatusEnum.ACTIVE:
      return 'Active';
    case TodoStatusEnum.DONE:
      return 'Done';
    default:
      return '';
  }
}
