import Link from "next/link"
import Image from "next/image"
import { navLinks } from "../../utils/data"
import NavItem from "./navItem"
import Settings from "../Settings"

export default function Navbar() {
	return (
		<nav className="sticky bg-gray-200/80 dark:bg-custom-dark-blue/80 top-0 inset-x-0 text-black text-sm dark:text-white z-50 tracking-wide backdrop-blur-xl">
			<div className="max-w-6xl mx-auto px-8 py-1">
				<div className="flex justify-between my-2 md:my-0">
					<div className="flex space-x-4">
						<Link href="/">
							<a className="flex items-center space-x-1">
								<Image
									src="/pb_animated.png"
									height={50}
									width={50}
									alt="Personal logo"
								/>
								<p className="font-medium">Sebastian Livoni</p>
							</a>
						</Link>
					</div>
					<div className="hidden md:flex items-center font-light relative">
						{navLinks.map((item, i) => (
							<NavItem item={item} key={i} />
						))}
						<Settings />
					</div>
				</div>
			</div>
		</nav>
	)
}
