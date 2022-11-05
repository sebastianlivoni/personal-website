import { useEffect } from "react"
import Layout from "../components/layout"
import { updateTheme } from "../lib/updateTheme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    updateTheme()
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
