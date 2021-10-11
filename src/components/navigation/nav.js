import ToggleDarkMode from '../darkModeToggle';
import logo from '../../images/profile_pb.png'

export default function Nav() {

  return (
    <nav className="fixed top-0 inset-x-0 text-black text-sm dark:text-white z-40 tracking-wide">
      <div className="max-w-6xl mx-auto px-8 py-1">
        <div className="flex justify-between my-2 md:my-0">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <img height="50px" width="50px" src={logo} alt="personal logo" />
              <a href="/" className="font-medium">Sebastian Livoni</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1 font-light">
            <a href="/" className="mr-3 hover:text-gray-700 dark:hover:text-gray-300">About</a>
            <a href="#contact-form" className="pr-3 hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
            <a href="/" className="px-3.5 py-2 bg-black rounded text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">View Work</a>
          </div>
          <div className="flex items-center cursor-pointer md:fixed md:bottom-10 md:left-10">
            <ToggleDarkMode />
          </div>
        </div>
      </div>
    </nav>
  )
}