import Footer from '../components/footer';
import Nav from '../components/navigation/nav';
import Contact from '../components/contact';

export default function ContactPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0 min-h-screen">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <h1 className="text-center text-4xl font-bold dark:text-white my-20">Fill out the form below to send me a message!</h1>
            <Contact />
          </div>
        </div>
        <Footer />
        
      </div>
    </>
  );
}
