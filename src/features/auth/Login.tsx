import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import AuthService from "../../services/auth.service";
import { useState } from "react";
import LocalStorageService from "../../services/localStorage.service";
import ToastService from "../../services/toast.service";
import { loginDefaultErrorMsg, loginSuccessMsg } from "../../messages/auth.message";
import Button from "../../components/Button";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const { token } = await AuthService.login({email, password});
            if (token) {
                LocalStorageService.setItem('token', token);
                await navigate('/');
                ToastService.success(loginSuccessMsg)
            } else {
                ToastService.error(loginDefaultErrorMsg)
            }
        } catch (error) {
            ToastService.error(`${loginDefaultErrorMsg}: ${error}`)
        } finally {
            setEmail('');
            setPassword('');
        }
    };
    
    return (
        <div className="m-auto">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Login</Button>
            </form>
            <small className="block mt-4">
                Don't have an account? Go to <Link to="/auth/register" className="no-underline text-blue-500">Register</Link> page.
            </small>
        </div>
    )
} 