import Head from "next/head"
import ContactForm from "../components/ContactForm"
import Jumbotron from "../components/Jumbotron"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Livoni</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Sebastian Livoni | Web Developer"
          key="title"
        />
        <meta
          property="og:description"
          content="Danish junior Web Developer with interest in computers, programming and technology. You can learn more about me on this website."
          key="description"
        />
        <meta
          name="description"
          content="Danish junior Web Developer with interest in computers, programming and technology. You can learn more about me on this website."
        />
      </Head>
      <Jumbotron />

      <ContactForm />
    </>
  )
}
