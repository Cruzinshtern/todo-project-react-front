import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import TodoListPage from './pages/TodoList.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Navbar from './components/Navbar.tsx';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<TodoListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
