import { FaGithub, FaFreeCodeCamp, FaLinkedin } from 'react-icons/fa';
import logo from '../../images/profile_pb.png'
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-16 dark:text-white">
      <nav className="inset-x-0 text-black text-xs md:text-sm dark:text-white">
        <div className="max-w-6xl mx-auto px-8 py-1">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <img height="50px" width="50px" src={logo} alt="personal logo" />
              </div>
            </div>
            <div className="flex items-center space-x-1 font-medium">
              <div className="hidden md:block">
                <a href="https://github.com/sebastianlivoni" target="_blank" rel="noreferrer" className="mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600">GitHub</a>
                <a href="https://www.freecodecamp.org/livoni" target="_blank" rel="noreferrer" className="pr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600">freeCodeCamp</a>
                <a href="https://www.linkedin.com/in/livoni/" target="_blank" rel="noreferrer" className="pr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600">LinkedIn</a>
                <NavLink exact to='/' className="mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600">Home</NavLink>
                <NavLink to="/about" className="pr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600">About</NavLink>
                <NavLink to="/contact" className="text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600">Contact</NavLink>
              </div>
              <div className="md:hidden flex text-lg">
                <a href="https://github.com/sebastianlivoni" target="_blank" rel="noreferrer" className="mr-6 hover:text-gray-700 dark:hover:text-gray-300"><FaGithub /></a>
                <a href="https://github.com/sebastianlivoni" target="_blank" rel="noreferrer" className="mr-6 hover:text-gray-700 dark:hover:text-gray-300"><FaFreeCodeCamp /></a>
                <a href="https://github.com/sebastianlivoni" target="_blank" rel="noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <p className="text-sm text-center mt-12 pb-12">Copyright © {new Date().getFullYear()} Sebastian Livoni. All rights reserved.</p>
    </div>
  )
}