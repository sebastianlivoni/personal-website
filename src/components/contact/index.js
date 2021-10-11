export default function Contact() {
  return (
    <>
      <div className="max-w-6xl mx-auto" id="contact-form">
        <div className="lg:flex mx-8 space-x-4 border-2 border-transparent bg-white dark:bg-transparent rounded-xl shadow-md overflow-hidden py-20 px-8 md:px-16 lg:pl-0 dark:border-2 dark:border-white">
          <div className="flex-1 lg:text-left tracking-wide">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl lg:ml-12 dark:text-white">Want to get in touch?</h2>
          </div>
          <div className="flex-1 mt-10 lg:mt-0">
            <form className="w-full lg:max-w-md">
              <div className="md:flex -ml-3 mb-6 mr-3 md:mr-0">
                <div className="md:w-1/2 md:mr-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First & Last Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black  dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-name" type="text" placeholder="Enter your name" />
                  {/*border-red-500*/}
                  {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                </div>
                <div className="md:w-1/2 md:ml-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-email">
                    Email Adress
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 leading-tight focus:outline-none" id="grid-email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="-ml-3 mb-8 mr-3 md:mr-0">
                <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 leading-tight focus:outline-none" id="grid-message" type="text" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <a href="/" className="-ml-3 px-8 py-3 bg-black dark:bg-gray-200 rounded-md duration-300 text-white hover:bg-gray-800 dark:text-black dark:hover:bg-gray-200">Submit</a>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}