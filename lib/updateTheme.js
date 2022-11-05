export function updateTheme() {
  if (typeof window !== "undefined") {
    let theme = localStorage.getItem("theme")

    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.getElementsByTagName("html")[0].classList.add("dark")
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark")
    }

    return theme
  }
}
