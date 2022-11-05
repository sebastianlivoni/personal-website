import { useRouter } from "next/router"
import Link from "next/link"
import styles from "../../styles/NavItems.module.css"

export default function NavItem({ item, footer }) {
  const router = useRouter()

  return (
    <Link href={item.path}>
      {item.isButton && !footer ? (
        <a
          href="/work"
          className={
            router.pathname !== "/portfolio"
              ? "mr-3 px-3.5 py-2 bg-gradient-to-r from-black to-black rounded text-white hover:bg-gray-800 dark:from-white dark:to-white dark:text-black dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white"
              : "mr-3 px-3.5 py-2 bg-gradient-to-r from-black to-black rounded text-white hover:bg-gray-800 dark:hover:from-pink-400 dark:hover:to-red-600 dark:hover:text-white dark:from-pink-400 dark:to-red-600 dark:text-white"
          }
        >
          View Work
        </a>
      ) : (
        <a
          title={item.name}
          target={item.social ? "_blank" : ""}
          className={
            router.pathname !== item.path
              ? `mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600`
              : `mr-3 text-transparent bg-clip-text bg-gradient-to-br from-black to-black dark:from-white dark:to-white dark:hover:from-pink-400 dark:hover:to-red-600` +
                " " +
                "dark:from-pink-400 dark:to-red-600 font-bold dark:font-medium"
          }
        >
          {item.name}
        </a>
      )}
    </Link>
  )
}
