import React, { useEffect } from 'react';
import Footer from '../components/footer';
import Nav from '../components/navigation/nav.jsx';
import Contact from '../components/contact';

export default function ContactPage() {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Livoni.me | Contact me";
  });

  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0 min-h-screen ">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <h1 className="text-center text-4xl font-bold dark:text-white my-20 animate__animated animate__fadeIn">Fill out the form below to send me a message!</h1>
            <Contact />
          </div>
        </div>
        <Footer />
        
      </div>
    </>
  );
}
