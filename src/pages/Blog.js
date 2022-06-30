import React, { useEffect } from 'react';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Nav from '../components/navigation/nav.jsx';
import AboutMe from '../components/about';
import Post from '../posts/first-post'


export default function Blog() {

  useEffect(() => {
    document.title = "Livoni.me | About me";
  });

  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <h1 className="text-center text-4xl font-bold dark:text-white my-20">Blog Posts!</h1>
            <p className="text-center mb-10">There is no posts yet! Take a look again in the near future.</p>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// {/* If you want to know more, <span className='bg-gradient-to-br bg-clip-text text-transparent from-white to-white from-pink-400 to-red-600 font-bold font-normal'>click</span> on the adjective. /*}