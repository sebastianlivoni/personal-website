import { IoMdCloseCircle, IoLogoLinkedin, IoMdSearch } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import React, { useState } from 'react'

export default function NavMobile() {

  const [showMe, setShowMe] = useState(false);
  function Toggle(){
    setShowMe(!showMe);
  }

  return (
    <>
      <div onClick={Toggle} className="md:hidden toggle-mobile mx-auto w-40 fixed inset-x-0 bottom-7 bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end rounded-3xl text-white text-md text-center shadow-xl cursor-pointer">
        <div className="flex py-2 justify-center">
          <svg className="stroke-current mt-1 mr-3 text-white" width="22px" height="18px" viewBox="0 0 22 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
              <g id="Hamburger">
                <g id="Line">
                  <line x1="0.5" y1="0.5" x2="13.5" y2="0.5"></line>
                  <line x1="0.5" y1="1.5" x2="13.5" y2="1.5"></line>
                </g>
                <g id="Line" transform="translate(8.000000, 16.000000)">
                  <line x1="0.5" y1="0.5" x2="13.5" y2="0.5"></line>
                  <line x1="0.5" y1="1.5" x2="13.5" y2="1.5"></line>
                </g>
                <g id="Line" transform="translate(0.000000, 8.000000)">
                  <line x1="0.5" y1="0.5" x2="21.5" y2="0.5" id="Line-2"></line>
                  <line x1="21.5" y1="1.5" x2="0.5" y2="1.5" id="Line-3"></line>
                </g>
              </g>
            </g>
          </svg>
          <p>Quick Menu</p>
        </div>
      </div>

      {/*{showMe ? (
        <>
          <div className="md:hidden nav-mobile fixed bottom-0 bg-white dark:bg-custom-dark-black dark:text-white w-full rounded-t-3xl shadow-2xl z-50">
            <div className="mx-auto max-w-xl divide-y">
              <div className="flex items-center font-bold py-8 mx-auto">
                <div className="flex-auto text-center">
                  <IoMdSearch className="ml-8 mr-auto text-4xl cursor-pointer" />
                </div>
                <div className="flex-auto text-center text-2xl">
                  <h1>Quick Navigation</h1>
                </div>
                <div className="flex-auto text-center cursor-pointer" onClick={Toggle}>
                  <IoMdCloseCircle className="mr-8 ml-auto text-3xl" />
                </div>
              </div>
              <div>
                <div className="my-8 mx-8 font-bold text-xl overflow-x-auto">
                  <div className="flex justify-center">
                    <a href="#" className="mx-4">About</a>
                    <a href="#contact-form" className="mx-4">Contact</a>
                    <a href="#" className="mx-4">Blog</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex my-8 mx-4 text-center text-lg text-custom-mobilenav-purple dark:text-white font-semibold">
                  <a className="flex-1 bg-gray-100 dark:bg-custom-dark-blue py-2 mx-3 rounded-lg shadow-md cursor-pointer" href="https://twitter.com/sebastianlivoni" target="_blank">
                    <FaTwitterSquare className="mx-auto text-3xl" />
                    <a>Twitter</a>
                  </a>
                  <a className="flex-1 bg-gray-100 dark:bg-custom-dark-blue py-2 mx-3 rounded-lg shadow-md cursor-pointer" href="https://www.linkedin.com/in/livoni/" target="_blank">
                    <IoLogoLinkedin className="mx-auto text-3xl" />
                    <a >LinkedIn</a>
                  </a>
                  <a className="flex-1 bg-gray-100 dark:bg-custom-dark-blue py-2 mx-3 rounded-lg shadow-md cursor-pointer" href="mailto:contact@livoni.me">
                    <MdEmail className="mx-auto text-3xl" />
                    <a>Email</a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}*/}
      <div className="transition-all duration-500 overflow-hidden ease-in-out">
        <div className={showMe ? "max-h-100 md:hidden nav-mobile fixed bottom-0 bg-white dark:bg-custom-dark-black dark:text-white w-full rounded-t-3xl shadow-2xl z-50" : "max-h-0 md:hidden nav-mobile fixed bottom-0 bg-white dark:bg-custom-dark-black dark:text-white w-full rounded-t-3xl shadow-2xl z-50"}>
          <div className="mx-auto max-w-xl divide-y">
            <div className="flex items-center font-bold py-8 mx-auto">
              <div className="flex-auto text-center">
                <IoMdSearch className="ml-8 mr-auto text-4xl cursor-pointer" />
              </div>
              <div className="flex-auto text-center text-2xl">
                <h1>Quick Navigation</h1>
              </div>
              <div className="flex-auto text-center cursor-pointer" onClick={Toggle}>
                <IoMdCloseCircle className="mr-8 ml-auto text-3xl" />
              </div>
            </div>
            <div>
              <div className="my-8 mx-8 font-bold text-xl overflow-x-auto">
                <div className="flex justify-center">
                  <a href="/" className="mx-4">About</a>
                  <a href="/" className="mx-4">Contact</a>
                  <a href="/" className="mx-4">Blog</a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex my-8 mx-4 text-center text-lg text-custom-mobilenav-purple dark:text-white font-semibold">
                <div className="flex-1 bg-gray-100 dark:bg-custom-dark-blue py-2 mx-3 rounded-lg shadow-md cursor-pointer" href="https://twitter.com/sebastianlivoni" target="_blank">
                  <FaTwitterSquare className="mx-auto text-3xl" />
                  <a href="/">Twitter</a>
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-custom-dark-blue py-2 mx-3 rounded-lg shadow-md cursor-pointer" href="https://www.linkedin.com/in/livoni/" target="_blank">
                  <IoLogoLinkedin className="mx-auto text-3xl" />
                  <a href="/">LindkedIn</a>
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-custom-dark-blue py-2 mx-3 rounded-lg shadow-md cursor-pointer" href="mailto:contact@livoni.me">
                  <MdEmail className="mx-auto text-3xl" />
                  <a href="/">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}