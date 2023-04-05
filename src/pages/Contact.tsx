import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <>
      <div className="mx-8">
        <h1 className="text-center text-4xl font-bold dark:text-white my-20 animate__animated animate__fadeIn">
          Fill out the form below to send me a message!
        </h1>
      </div>
      <ContactForm />
    </>
  )
}
