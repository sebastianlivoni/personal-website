import logo from '../../images/profile_pb.png'
import NavMobile from './nav_mobile'
import { Link, NavLink } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import React, { useRef } from 'react'
import { useDetectOutsideClick } from '../minor/UseDetectOutsideClick';
import { HiOutlineDesktopComputer, HiSelector } from 'react-icons/hi';

export default function Nav(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  /*const [showMe, setShowMe] = useState(false);*/
  const onClick = () => setIsActive(!isActive)

  return (
    <>
      <nav className={props.sticky === true ? "sticky top-0 inset-x-0 text-black text-sm dark:text-white z-40 tracking-wide" : "top-0 inset-x-0 text-black text-sm dark:text-white z-40 tracking-wide"}>
        <div className="max-w-6xl mx-auto px-8 py-1">
          <div className="flex justify-between my-2 md:my-0">
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center space-x-1">
                <img height="50px" width="50px" src={logo} alt="personal logo" />
                <p className="font-medium">Sebastian Livoni</p>
              </Link>
            </div>
            <div className="hidden md:flex items-center font-light relative">
              <NavLink exact to='/' className="mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600 font-bold dark:font-normal">Home</NavLink>
              <NavLink to="/about" className="mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600 font-bold dark:font-normal">About</NavLink>
              <NavLink to="/contact" className="pr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600" activeClassName="dark:from-white dark:to-white dark:from-pink-400 dark:to-red-600 font-bold dark:font-normal">Contact</NavLink>
              <NavLink to="/work" className="mr-3 px-3.5 py-2 bg-black rounded text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">View Work</NavLink>
              <FiSettings className="text-lg cursor-pointer" onClick={onClick} />
              <div ref={dropdownRef} className={isActive ? "block absolute right-0 top-14 py-2 px-4 bg-white rounded-md shadow-xl z-20" : "hidden absolute right-0 top-14 py-2 w-48 bg-white rounded-md shadow-xl z-20"}>
                <div className="flex space-x-4 items-center text-center py-2">
                  <div className="flex-1">
                    <label>Theme</label>
                  </div>
                  <div className="flex-1">
                    <div className="select-wrap flex items-center py-1 px-1 relative">
                      <label for="select-theme"><HiOutlineDesktopComputer className="absolute text-lg bottom-3 left-4 pointer-events-none" /></label>
                      <select className="appearance-none bg-transparent relative w-32 pl-9 py-1.5 border border-gray-600 rounded outline-none" id="select-theme">
                        <option value="system">System</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                      </select>
                      <label for="select-theme"><HiSelector className="absolute text-lg bottom-3 right-4 pointer-events-none" /></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="flex items-center cursor-pointer md:fixed md:bottom-10 md:left-10 z-30">
              <ToggleDarkMode />
            </div>*/}
          </div>
        </div>
      </nav>
      <NavMobile />
    </>
  )
}