import React, { useEffect } from 'react';
import Nav from './components/navigation/nav.jsx';
import colorful from './images/colorful.png'
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Sebastian Livoni | Website Portfolio";
  });

  return (
    <>
      <div className="transition ease-in-out duration-300 font-poppins bg-gray-200 dark:bg-custom-dark-blue pb-12 md:pb-0">
        <div> {/* This div is for sticky navbar to not overflow with other content */}
          <Nav sticky={true} />
          <div className="flex justify-center items-center h-screen tracking-wide">
            <img src={colorful} className="absolute inset-x-0 mx-auto z-0 pointer-events-none" alt="background-gradient" /> {/* animate-spin-slow */}
            <div className="max-w-sm sm:max-w-lg lg:max-w-xl mx-12 z-30">
              <h1 className="text-5xl md:text-8xl xl:text-9xl font-medium mb-3 dark:text-white animate__animated animate__fadeInDown ">Hi there!</h1>
              <h5 className="text-md lg:text-xl font-light text-gray-700 dark:text-white animate__animated animate__fadeIn">I'm Sebastian, a 20 year old upcoming full stack developer with a deep desire to develop in C and React. Explore my webpage to learn more about my journey.</h5>
            </div>
          </div>
        </div>
        
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
