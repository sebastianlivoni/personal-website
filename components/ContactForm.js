import React, { useState } from "react"

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    if (isSending) return

    event.preventDefault()

    setIsSending(true)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.reply_to.value,
        message: event.target.message.value,
      }),
    })

    const result = await response.json()

    setIsSending(false)

    alert(result.message)
  }

  return (
    <section className="max-w-6xl mx-auto" id="contact-form">
      <div className="lg:flex mx-8 space-x-4 border-2 border-transparent bg-white dark:bg-transparent rounded-xl shadow-md overflow-hidden py-20 px-8 md:px-16 lg:pl-0 dark:border-2 dark:border-white">
        <div className="flex-1 lg:text-left tracking-wide">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl lg:ml-12 dark:text-white">
            Want to get in touch?
          </h2>
          <p className="mt-2 lg:ml-12 lg:mr-12 dark:text-white">
            I&apos;m here for questions and offerings. I look forward to hearing
            from you.
          </p>
        </div>
        <div className="flex-1 mt-10 lg:mt-0">
          <form className="w-full lg:max-w-md" onSubmit={handleSubmit}>
            <div className="md:flex -ml-3 mb-6 mr-3 md:mr-0">
              <div className="md:w-1/2 md:mr-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  First & Last Name
                </label>
                <input
                  name="name"
                  className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black  dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="md:w-1/2 md:ml-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email Adress
                </label>
                <input
                  name="reply_to"
                  className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 leading-tight focus:outline-none"
                  id="grid-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="-ml-3 mb-8 mr-3 md:mr-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                name="message"
                className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 leading-tight focus:outline-none"
                id="grid-message"
                type="text"
                rows="5"
                placeholder="Enter your message"
                minLength="50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="-ml-3 px-8 py-3 bg-black dark:bg-gray-200 rounded-md duration-300 text-white hover:bg-gray-800 dark:text-black dark:hover:bg-gray-200"
              disabled={isSending}
            >
              {isSending ? "Please wait..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
