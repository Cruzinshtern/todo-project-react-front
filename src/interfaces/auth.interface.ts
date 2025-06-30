export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export interface RegisterResponse {
    firstName: string;
    lastName: string;
    email: string;
  }

  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
  }