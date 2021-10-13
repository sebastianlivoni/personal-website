import Footer from '../components/footer';
import Contact from '../components/contact';
import Nav from '../components/navigation/nav';
import TimeLine from '../components/timeline';
import AboutMe from '../components/about';
import Skills from '../components/skills';

export default function AboutPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <AboutMe />

            <TimeLine />
            <Skills />
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
