import type { TableColumn } from './table.interface';

export interface CreateTodoRequest {
  title: string;
  description?: string;
  start_at: string;
}

export interface CreateTodoResponse {
  title: string;
  description: string;
  status: number;
  isFavorite: false;
  created_at: string;
  start_at: string;
  created_by: string;
  _id: string;
}

export type DisplayType = 'tiles' | 'table';

export interface Tab {
  key: DisplayType;
  value: string;
}

export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: number;
  isFavorite: false;
  created_at: string;
  start_at: string;
  created_by: string;
}

export interface TodoInputProp {
  todo: Todo;
}

export interface PaginatedTodosResponse {
  data: Todo[];
  count: number;
}

export interface TodoListInputProp {
  todos: Todo[] | undefined;
}

export interface TodoTilesInputProp extends TodoListInputProp {}

export interface TodoTableInputProp extends TodoListInputProp {
  /**
   * Columns to be rendered in a table
   *
   * **Important:** The order of columns in this array directly determines their display order.
   */
  columns: TableColumn[];
  /**
   * Additional classed for a table
   */
  tableClass?: string;
  /**
   * Display actions column
   */
  showActions: boolean;
}

export interface TabPanelInputProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  label?: string;
}

export const TodoStatusEnum = {
  TODO: 1,
  ACTIVE: 2,
  DONE: 3,
} as const;
