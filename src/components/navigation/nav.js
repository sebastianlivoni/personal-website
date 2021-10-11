import ToggleDarkMode from '../darkModeToggle';
import logo from '../../images/profile_pb.png'
import NavMobile from './nav_mobile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Nav() {

  return (
    <>
      <nav className="sticky top-0 inset-x-0 text-black text-sm dark:text-white z-40 tracking-wide">
        <div className="max-w-6xl mx-auto px-8 py-1">
          <div className="flex justify-between my-2 md:my-0">
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center space-x-1">
                <img height="50px" width="50px" src={logo} alt="personal logo" />
                <a className="font-medium">Sebastian Livoni</a>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1 font-light">
              <NavLink to="/about" className="mr-3 hover:text-gray-700 dark:hover:text-gray-300" activeClassName="text-gray-700 dark:text-gray-300">About</NavLink>
              <NavLink to="/contact" className="pr-3 hover:text-gray-700 dark:hover:text-gray-300" activeClassName="text-gray-700 dark:text-gray-300">Contact</NavLink>
              <NavLink to="/" className="px-3.5 py-2 bg-black rounded text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">View Work</NavLink>
            </div>
            <div className="flex items-center cursor-pointer md:fixed md:bottom-10 md:left-10">
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </nav>
      <NavMobile />
    </>
  )
}