import logo from '../../images/profile_pb.png'
import NavMobile from './nav_mobile'
import { Link, NavLink } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import React, { Component, useRef } from 'react'
import { useDetectOutsideClick } from '../minor/UseDetectOutsideClick';
import { HiOutlineDesktopComputer, HiSelector } from 'react-icons/hi';
import { GrLanguage } from 'react-icons/gr';

const theme_options = [
  {
    label: "System",
    value: "system",
  }, {
    label: "Dark",
    value: "dark",
  }, {
    label: "Light",
    value: "light",
  },
];

class ThemeSelect extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('theme')) {
      this.state = {
        theme: localStorage.getItem('theme'),
      };
    } else {
      this.state = {
        theme: "system",
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    localStorage.setItem('theme', e.target.value);
    this.setState({ theme: e.target.value });
    const root = document.getElementById('root');
    if (e.target.value === "dark") {
      root.classList.add("dark");
    } else if (e.target.value === "light") {
      root.classList.remove("dark");
    } else if (e.target.value === "system" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add("dark");
    } else if (e.target.value === "system" && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      root.classList.remove("dark");
    }
  }
  

  render() {
    return (
      <select className="appearance-none bg-transparent relative w-32 pl-9 py-1.5 border border-gray-600 rounded outline-none" id="select-theme" value={this.state.theme} onChange={this.handleChange}>
        {theme_options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    )
  }
}

export default function Nav(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  /*const [showMe, setShowMe] = useState(false);*/
  const onClick = () => setIsActive(!isActive);

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
              <div ref={dropdownRef} className={isActive ? "grid absolute right-0 top-14 bg-white rounded-md shadow-xl z-20 divide-y divide-gray-600" : "hidden"}>
                <div className="flex space-x-4 items-center text-center py-3 px-4">
                  <div className="flex-1">
                    <label>Theme</label>
                  </div>
                  <div className="flex-1">
                    <div className="select-wrap flex items-center py-1 px-1 relative">
                      <label htmlFor="select-theme"><HiOutlineDesktopComputer className="absolute text-lg bottom-3 left-4 pointer-events-none" /></label>
                      <ThemeSelect />
                      <label htmlFor="select-theme"><HiSelector className="absolute text-lg bottom-3 right-4 pointer-events-none" /></label>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 items-center text-center py-3 px-4">
                  <div className="flex-1">
                    <label>Langauge</label>
                  </div>
                  <div className="flex-1">
                    <div className="select-wrap flex items-center py-1 px-1 relative">
                      <label htmlFor="select-theme"><GrLanguage className="absolute text-lg bottom-3 left-4 pointer-events-none" /></label>
                      <select className="appearance-none bg-transparent relative w-32 pl-9 py-1.5 border border-gray-600 rounded outline-none" id="select-theme">
                        <option value="english">English</option>
                        <option value="danish">Danish</option>
                        <option value="german">German</option>
                      </select>
                      <label htmlFor="select-theme"><HiSelector className="absolute text-lg bottom-3 right-4 pointer-events-none" /></label>
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