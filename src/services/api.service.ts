import axios from 'axios';

// Создаем экземпляр Axios
const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Опционально: Добавьте перехватчик для токена авторизации
// // Это очень удобно, если у вас будет аутентификация по токену
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('userToken'); // Или откуда вы берете токен
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Опционально: Добавьте перехватчик для централизованной обработки ошибок
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Пример обработки 401 (Unauthorized)
//     if (error.response && error.response.status === 401) {
//       console.error('Ошибка авторизации. Перенаправление на страницу входа...');
//       // Например, перенаправить на страницу входа или очистить токен
//       localStorage.removeItem('userToken');
//       // window.location.href = '/auth/login'; // НЕ РЕКОМЕНДУЕТСЯ напрямую в перехватчике в React-приложении, лучше через контекст/Redux
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
