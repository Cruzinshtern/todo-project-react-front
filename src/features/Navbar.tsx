import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { NavItem } from '../interfaces/navItem.interface';
import { FiLogOut } from 'react-icons/fi';
import LocalStorageService from '../services/localStorage.service';
import { NAV_ITEMS, USER_TOKEN } from '../constants/constants';

export default function Navbar() {
  const navItems: NavItem[] = NAV_ITEMS;
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    LocalStorageService.removeItem(USER_TOKEN);
    await navigate('/auth/login');
  }

  return (
    <div className="flex w-full justify-between items-center bg-blue-400 p-4 text-white">
      <div>Todo Project</div>
      <nav>
        <ul className="flex gap-4 items-center list-none">
          {navItems.map((navItem: NavItem) => {
            const isActive = location.pathname === navItem.link;
            return (
              <li key={navItem.key}>
                <Link
                  to={navItem.link}
                  className={`
                    no-underline hover:text-gray-200 transition-colors duration-200
                    ${isActive ? 'border-b-2 border-gray-200 pb-1 text-gray-200' : 'text-white'}
                  `}
                >
                  {navItem.value}
                </Link>
              </li>
            );
          })}
          <FiLogOut
            size={20}
            className="cursor-pointer ml-5 hover:text-gray-200 text-white"
            onClick={handleLogout}
          />
        </ul>
      </nav>
    </div>
  );
}
