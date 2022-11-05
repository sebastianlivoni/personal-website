import Image from "next/image"
import { footerLinks } from "../../utils/data"
import NavItem from "./navItem"

export default function Footer() {
  return (
    <footer className="mt-16 dark:text-white">
      <nav className="inset-x-0 text-black text-xs md:text-sm dark:text-white">
        <div className="max-w-6xl mx-auto px-8 py-1">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Image
                  src="/pb_animated.png"
                  height={50}
                  width={50}
                  alt="Personal logo"
                />
              </div>
            </div>
            <div className="space-x-1 font-medium">
              <div className="hidden md:flex">
                {footerLinks.map((item, i) => (
                  <NavItem key={i} footer={true} item={item} />
                ))}
              </div>
              <div className="md:hidden flex text-lg">
                {footerLinks.map((item, i) =>
                  item.social || item.onlyShowIcon ? (
                    <a
                      key={i}
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-6 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      {item.icon}
                    </a>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <p className="text-sm text-center mt-12 pb-12">
        Copyright © {new Date().getFullYear()} Sebastian Livoni. All rights
        reserved.
      </p>
    </footer>
  )
}
