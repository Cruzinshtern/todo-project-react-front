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
