import Nav from './components/navigation/nav';
import colorful from './images/colorful.png'
import Contact from './components/contact';
import Footer from './components/footer';
import NavMobile from './components/navigation/nav_mobile'

function App() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <div> {/* This div is for sticky navbar to not overflow with other content */}
          <Nav />
          <div className="flex justify-center items-center h-screen tracking-wide">
            <img src={colorful} className="absolute inset-x-0 mx-auto z-0" alt="background-gradient" /> {/* animate-spin-slow */}
            <div className="max-w-sm sm:max-w-lg lg:max-w-xl mx-12 z-30">
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-medium mb-3 dark:text-white">Hi there!</h1>
              <h5 className="text-md lg:text-xl font-light text-gray-700 dark:text-white">I'm Sebastian, a 20 year old upcoming full stack developer with a deep desire to develop in C and React. Explore my webpage to learn more about my journey.</h5>
            </div>
          </div>
        </div>
        
        <Contact />
        <Footer />
      </div>
      <NavMobile />
    </>
  );
}

export default App;
