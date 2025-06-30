import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../interfaces/auth.interface';
import api from './api.service';

const AuthService = {
  /**
   * Sends request to register a new user.
   * @param payload Object with registration data (firstName, lastName, email, password).
   * @returns Promise resolving with created user data.
   */
  async register(payload: RegisterRequest): Promise<RegisterResponse> {
    const response = await api.post('/users/create', payload);
    return response.data;
  },

  /**
   * Sends request to register a new user.
   * @param payload Object with registration data (firstName, lastName, email, password).
   * @returns Promise resolving with an issued token.
   */
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await api.post('/auth/login', payload);
    return response.data;
  },
};

export default AuthService;
