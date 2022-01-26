import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Nav from '../components/navigation/nav.jsx';

export default function WorkPage() {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Livoni.me | My work";
  });

  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0 min-h-screen">
        <Nav sticky={false} />
        <div className="flex max-w-6xl mx-auto tracking-wide justify-center my-60">
          <div className="dark:text-white">
            <h1 className="text-3xl dark:text-white font-bold max-w-lg">This page will be updated as soon as I have something <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white from-pink-400 to-red-600">awesome</span> to show you! Check this page again in a few days.</h1>
          </div>
        </div>
        <Footer />
        
      </div>
    </>
  );
}
