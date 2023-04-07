import { NavLink } from "react-router-dom"

export default function NavItem({ item, footer }: { item: any, footer: boolean }) {
  return (
    <>
      {item.isButton && !footer ? (
        <NavLink
          to={item.path}
          className={({ isActive }) => "px-3.5 py-2 bg-gradient-to-r from-black to-black rounded text-white hover:bg-gray-800 " + (!isActive ? "dark:from-white dark:to-white dark:text-black dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white"
          : "dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white dark:from-pink-400 dark:to-red-600 dark:text-white") }
        >
          {item.name}
        </NavLink>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) => "text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:hover:from-pink-400 dark:hover:to-red-600 " + (isActive ?
            `dark:from-pink-400 dark:to-red-600 font-bold dark:font-medium`
          : `dark:from-white dark:to-white`) }
        >
          {item.name}
        </NavLink>
      )}
    </>
  )
}