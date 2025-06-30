import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { useState } from 'react';
import AuthService from '../../services/auth.service';
import ToastService from '../../services/toast.service';
import { registerSuccessMsg } from '../../messages/auth.message';
import Button from '../../components/Button';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await AuthService.register({ firstName, lastName, email, password });
      await navigate('/auth/login');
      ToastService.success(registerSuccessMsg);
    } catch (error) {
      ToastService.error(`${registerSuccessMsg}: ${error}`);
    } finally {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="m-auto">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </form>
      <small className="block mt-4">
        Already have an account? Go to{' '}
        <Link to="/auth/login" className="no-underline text-blue-500">
          Login
        </Link>{' '}
        page.
      </small>
    </div>
  );
}
