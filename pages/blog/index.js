import ContactForm from "../../components/ContactForm"

export default function Blog() {
  return (
    <>
      <div className="max-w-6xl mx-auto tracking-wide pb-5 animate__animated animate__fadeIn">
        <div className="mx-8">
          <h1 className="text-center text-4xl font-bold dark:text-white my-20">
            Blog Posts!
          </h1>
          <p className="text-center mb-10 dark:text-white">
            There is no posts yet! Take a look again in the near future.
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  )
}
