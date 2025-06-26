import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex w-full justify-between items-center">
            <div>Todo Project</div>
            <nav>
                <ul className="flex gap-2 list-none text-red-500">
                    <li>
                        <Link to="/" className="no-underline text-red-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/list" className="no-underline">Todo List</Link>
                    </li>
                    <li>
                        <Link to="/settings" className="no-underline">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}