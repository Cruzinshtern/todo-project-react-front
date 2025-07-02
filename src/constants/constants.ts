import type { NavItem } from '../interfaces/navItem.interface';
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
