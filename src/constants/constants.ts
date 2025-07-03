import type { NavItem } from '../interfaces/navItem.interface';
import type { SelectOption, TableColumn } from '../interfaces/table.interface';
import type { Tab } from '../interfaces/todo.interface';

export const USER_TOKEN: string = 'token';
export const NAV_ITEMS: NavItem[] = [
  {
    key: 'home',
    value: 'Home',
    link: '/',
  },
  {
    key: 'todoDesigner',
    value: 'Todo',
    link: '/todo',
  },
  {
    key: 'todoList',
    value: 'Todo List',
    link: '/list',
  },
  {
    key: 'settings',
    value: 'Settings',
    link: '/settings',
  },
];
export const TODO_DISPLAY_TABS: Tab[] = [
  { key: 'tiles', value: 'Tiles' },
  { key: 'table', value: 'Table' },
];
export const TODO_TABLE_COLUMNS: TableColumn[] = [
  { key: 'title', value: 'Title' },
  { key: 'description', value: 'Description' },
  { key: 'status', value: 'Status' },
  { key: 'created_at', value: 'Created at' },
  { key: 'start_at', value: 'Due date' },
];
export const TODO_LIMIT_OPTIONS: SelectOption[] = [
  { key: '5', value: '5', isDisabled: false },
  { key: '10', value: '10', isDisabled: false },
  { key: '20', value: '20', isDisabled: false },
];
