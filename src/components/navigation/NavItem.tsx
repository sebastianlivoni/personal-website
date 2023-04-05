import { NavLink } from "react-router-dom"

export default function NavItem({ item, footer }: { item: any, footer: boolean }) {
  return (
    <>
      {item.isButton && !footer ? (
        <NavLink
          to={item.path}
          className={({ isActive }) => !isActive ? "mr-3 px-3.5 py-2 bg-gradient-to-r from-black to-black rounded text-white hover:bg-gray-800 dark:from-white dark:to-white dark:text-black dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white"
          : "mr-3 px-3.5 py-2 bg-gradient-to-r from-black to-black rounded text-white hover:bg-gray-800 dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white dark:from-pink-400 dark:to-red-600 dark:text-white" }
        >
          View Work
        </NavLink>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) => isActive ?
            `mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-pink-400 dark:to-red-600 dark:hover:from-pink-400 dark:hover:to-red-600 font-bold dark:font-medium`
          : `mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600` }
        >
          {item.name}
        </NavLink>
      )}
    </>
  )
}