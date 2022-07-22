import logo from '../../images/profile_pb.png'
import NavMobile from './nav_mobile'
import { Link, NavLink } from "react-router-dom";
import ToggleDarkMode from '../darkModeToggle';
import Settings from '../minor/settings';

const navItems = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]

export default function Nav(props) {
  return (
    <>
      <nav className={props.sticky === true ? "sticky top-0 inset-x-0 text-black text-sm dark:text-white z-40 tracking-wide" : "top-0 inset-x-0 text-black text-sm dark:text-white z-40 tracking-wide "}>
        <div className="max-w-6xl mx-auto px-8 py-1">
          <div className="flex justify-between my-2 md:my-0">
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center space-x-1">
                <img height="50px" width="50px" src={logo} alt="personal logo" />
                <p className="font-medium">Sebastian Livoni</p>
              </Link>
            </div>
            <div className="hidden md:flex items-center font-light relative">
              {navItems.map(item => (
                <NavLink key={item.id} exact to={item.path} className="mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600 font-bold dark:font-normal">{item.name}</NavLink>
              ))}
              <NavLink to="/work" className="mr-3 px-3.5 py-2 bg-gradient-to-r from-black to-black dark:from-white dark:to-white rounded text-white hover:bg-gray-800 dark:from-white dark:to-white dark:text-black dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white" activeClassName="dark:from-pink-400 dark:to-red-600 dark:text-white">View Work</NavLink>
              <Settings />
            </div>
            <div className="flex items-center cursor-pointer md:fixed md:bottom-10 md:left-10 z-30">
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </nav>
      <NavMobile />
    </>
  )
}