import type { CreateTodoRequest, CreateTodoResponse } from '../interfaces/todo.interface';
import api from './api.service';

const TodoService = {
  /**
   * Sends request to create a new todo.
   * @param payload Object with todo data.
   * @returns Promise resolving with created todo.
   */
  async createTodo(payload: CreateTodoRequest): Promise<CreateTodoResponse> {
    const response = await api.post('/tasks/create', payload);
    return response.data;
  },
};

export default TodoService;
