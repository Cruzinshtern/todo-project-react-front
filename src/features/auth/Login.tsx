import { Link } from "react-router-dom";
import Input from "../../components/Input";

export default function Login() {
    return (
        <div className="m-auto">
            Login
            <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Enter your name"/>
                <Input type="password" placeholder="Enter your password"/>
            </form>
            <div className="mt-2">
                Don't have an account? Go to <Link to="/auth/register" className="no-underline text-blue-500">Register</Link> page.
            </div>
        </div>
    )
} 