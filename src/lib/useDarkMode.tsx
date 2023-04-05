import { Dispatch, createContext, useContext, useEffect, useState } from "react"

interface DarkModeContextType {
  theme: string;
  setTheme: Dispatch<string>;
}

const DarkModeContext = createContext<DarkModeContextType>(null!);

export const DarkModeProvider = ({ children }: { children: any }) => {
	const [theme, setTheme] = useState(localStorage.theme ?? "system")

	function updateTheme() {
		const root = window.document.documentElement

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

export const useDarkMode = () => useContext(DarkModeContext)
