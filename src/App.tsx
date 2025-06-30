import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import TodoListPage from './pages/TodoList.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Navbar from './features/Navbar.tsx';
import SerttingsPage from './pages/SettingsPage.tsx';
import AuthPage from './pages/AuthPage.tsx';
import Register from './features/auth/Register.tsx';
import Login from './features/auth/Login.tsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/auth');

  return (
    <>
      {hideNavbar || <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<TodoListPage />} />
        <Route path="/settings" element={<SerttingsPage />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* If route is '/auth/not-valid-child-route' - redirect to /auth/login */}
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
          {/* If route is just '/auth/' - redirect to /auth/login */}
          <Route index element={<Navigate to="login" replace />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
