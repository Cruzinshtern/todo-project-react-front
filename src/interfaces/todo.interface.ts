import type React from 'react';
import type { IconBaseProps } from 'react-icons';

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

export interface BadgeInputProp {
  color: 'blue' | 'yellow' | 'red';
  size: number;
  children: React.ReactElement<IconBaseProps>;
}

export interface PaginatedTodosResponse {
  data: Todo[];
  count: number;
}

export interface TodoListInputProp {
  todos: Todo[] | undefined;
}

export interface TodoTilesInputProp extends TodoListInputProp {}

export interface TodoTableInputProp extends TodoListInputProp {}

export interface TabPanelInputProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  label?: string;
}
