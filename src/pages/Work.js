import Footer from '../components/footer';
import Contact from '../components/contact';
import Nav from '../components/navigation/nav';
import AboutMe from '../components/about';

export default function WorkPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0 min-h-screen">
        <Nav sticky={false} />
        <div className="flex max-w-6xl mx-auto tracking-wide justify-center my-60">
          <div className="dark:text-white">
            <h1 className="text-3xl dark:text-white font-bold max-w-lg">This page will be updated as soon as I have something to show you!</h1>
          </div>
        </div>
        <Footer />
        
      </div>
    </>
  );
}
