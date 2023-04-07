import { navLinks } from "../../utils/data"
import Settings from "../Settings"
import NavItem from "./NavItem"

export default function Navbar() {
	return (
		<nav className="sticky bg-gray-200/80 dark:bg-custom-dark-blue/80 top-0 inset-x-0 text-black text-sm dark:text-white z-50 tracking-wide backdrop-blur-xl">
			<div className="max-w-6xl mx-auto px-8 py-1">
				<div className="flex justify-between my-2 md:my-0">
					<div className="flex space-x-4">
						<a href="/" className="flex items-center space-x-1">
							<img
								src="/pb_animated.png"
								height={50}
								width={50}
								alt="Personal logo"
							/>
							<p className="font-medium">Sebastian Livoni</p>
						</a>
					</div>
					<div className="hidden space-x-3 md:flex items-center font-light relative">
						{navLinks.map((item, i) => (
							<NavItem item={item} footer={false} key={i} />
						))}
						<Settings />
					</div>
				</div>
			</div>
		</nav>
	)
}
