import { useEffect, useRef, useState } from "react"
import { FiSettings } from "react-icons/fi"
import { BsSun, BsMoon } from "react-icons/bs"
import { HiOutlineDesktopComputer, HiSelector } from "react-icons/hi"
import { useDarkMode } from "../lib/useDarkMode"

const theme_options = [
	{
		label: "System",
		value: "system",
	},
	{
		label: "Dark",
		value: "dark",
	},
	{
		label: "Light",
		value: "light",
	},
]

function ThemeSelector() {
	const { theme, setTheme } = useDarkMode()

	return (
		<>
			<label htmlFor="select-theme">
				{theme === "system" ? (
					<HiOutlineDesktopComputer className="absolute text-lg bottom-3 left-4 pointer-events-none" />
				) : theme === "dark" ? (
					<BsMoon className="absolute text-lg bottom-3 left-4 pointer-events-none" />
				) : (
					<BsSun className="absolute text-lg bottom-3 left-4 pointer-events-none" />
				)}
			</label>
			<select
				className="appearance-none bg-transparent relative w-32 pl-9 py-1.5 border border-gray-600 dark:border-custom-light-gray rounded outline-none"
				id="select-theme"
				value={theme}
				onChange={(e) => setTheme(e.target.value)}
			>
				{theme_options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	)
}

function useOutsideClick(ref: any) {
	const [isVisible, setIsVisible] = useState(false)

	function handleClickOutside(e: any) {
		if (!ref.current.contains(e.target) && isVisible) {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [isVisible])

	return { ref, isVisible, setIsVisible }
}

export default function Settings() {
	const dropdownRef = useRef(null)
	const { isVisible, setIsVisible } = useOutsideClick(dropdownRef)

	return (
		<div ref={dropdownRef}>
			<FiSettings
				className="text-lg cursor-pointer text-black dark:text-white transform transition-all hover:rotate-45"
				onClick={() => setIsVisible(!isVisible)}
			/>
			<div
				className={
					isVisible
						? "grid absolute right-0 top-8 md:top-14 bg-white rounded-md shadow-xl z-20 divide-y divide-gray-600 dark:divide-custom-light-gray border border-transparent dark:border-custom-light-gray dark:bg-custom-dark-blue"
						: "hidden"
				}
			>
				<div className="flex space-x-4 items-center text-center py-3 px-4 text-black dark:text-white">
					<div className="flex-1">
						<label>Theme</label>
					</div>
					<div className="flex-1">
						<div className="select-wrap flex items-center py-1 px-1 relative">
							<ThemeSelector />
							<label htmlFor="select-theme">
								<HiSelector className="absolute text-lg bottom-3 right-4 pointer-events-none" />
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
