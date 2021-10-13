import { useState } from 'react';
import { send } from 'emailjs-com';

export default function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const [message, setMessage] = useState();
  const [buttonMessage, setButtonMessage] = useState("Submit");
  const [showSuccess, setShowSuccess] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.message == '') {
      setMessage("Please type a message!");
      return -1;
    }
    if (toSend.from_name == '') {
      setMessage("Please type your name!");
      return -1;
    }
    if (toSend.reply_to == '') {
      setMessage("Please type your email!");
      return -1;
    }
    setButtonMessage("Please wait...");
    send(
      'service_cysj1rb',
      'template_5mswnb5',
      toSend,
      'user_MlZ1fY31hZ5ieRtwmxPyN'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="max-w-6xl mx-auto" id="contact-form">
        <div className="lg:flex mx-8 space-x-4 border-2 border-transparent bg-white dark:bg-transparent rounded-xl shadow-md overflow-hidden py-20 px-8 md:px-16 lg:pl-0 dark:border-2 dark:border-white">
          <div className="flex-1 lg:text-left tracking-wide">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl lg:ml-12 dark:text-white">Want to get in touch?</h2>
          </div>
          <div className="flex-1 mt-10 lg:mt-0">
            {!showSuccess ? 
              <>
                <form className="w-full lg:max-w-md" onSubmit={onSubmit}>
                  <div className="md:flex -ml-3 mb-6 mr-3 md:mr-0">
                    <div className="md:w-1/2 md:mr-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First & Last Name
                      </label>
                      <input name='from_name' value={toSend.from_name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black  dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-name" type="text" placeholder="Enter your name" />
                      {/*border-red-500*/}
                      {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>
                    <div className="md:w-1/2 md:ml-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-email">
                        Email Adress
                      </label>
                      <input name='reply_to' value={toSend.reply_to} onChange={handleChange} className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 leading-tight focus:outline-none" id="grid-email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="-ml-3 mb-8 mr-3 md:mr-0">
                    <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" htmlFor="grid-message">
                      Message
                    </label>
                    <textarea name='message' value={toSend.message} onChange={handleChange} className="appearance-none block w-full bg-gray-200 dark:bg-custom-dark-black dark:border-transparent text-gray-700 dark:text-custom-light-gray dark:placeholder-custom-light-gray rounded py-3 px-4 leading-tight focus:outline-none" id="grid-message" type="text" rows="5" placeholder="Enter your message"></textarea>
                  </div>
                  <button type='submit' className="-ml-3 px-8 py-3 bg-black dark:bg-gray-200 rounded-md duration-300 text-white hover:bg-gray-800 dark:text-black dark:hover:bg-gray-200">{buttonMessage}</button>
                  <p className="-ml-3 mt-5 text-red-500 text-xs italic">{message}</p>
                </form>
              </> :
              <>
                <h1>Thank you for your message</h1>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

const Form = () => {
  
}