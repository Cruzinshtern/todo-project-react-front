import { Link } from "react-router-dom";
import Input from "../../components/Input";

export default function Register() {
    return (
        <div className="m-auto">
            Register
            <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Enter your name"/>
                <Input type="password" placeholder="Enter your password"/>
            </form>
            <div className="mt-2">
                Already have an account? Go to <Link to="/auth/login" className="no-underline text-blue-500">Login</Link> page.
            </div>
        </div>
    )
} 