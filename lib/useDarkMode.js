import { createContext, useContext, useEffect, useState } from "react"

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? localStorage.theme : "system"
	)

	function updateTheme() {
		const root = window.document.documentElement

		if (window !== undefined) {
			if (localStorage.getItem("theme") == undefined) {
				localStorage.setItem("theme", "system")
				setTheme("system")
			}

			if (
				theme == "dark" ||
				(theme == "system" &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				root.classList.add("dark")
			} else {
				root.classList.remove("dark")
			}

			localStorage.setItem("theme", theme)
		}
	}

	useEffect(() => {
		updateTheme()
	}, [updateTheme])

	if (typeof window !== "undefined") {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", () => {
				updateTheme()
			})
	}

	return (
		<DarkModeContext.Provider value={{ theme, setTheme }}>
			{children}
		</DarkModeContext.Provider>
	)
}

export const useDarkMode = () => {
	const { theme, setTheme } = useContext(DarkModeContext)
	return { theme, setTheme }
}

export default useDarkMode
