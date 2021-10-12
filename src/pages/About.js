import Footer from '../components/footer';
import Contact from '../components/contact';
import Nav from '../components/navigation/nav';
import TimeLine from '../components/timeline';
import AboutMe from '../components/about';
import Skills from '../components/skills';

export default function AboutPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition md:pb-0">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <AboutMe />

            <svg class="mx-auto mb-20 animate-bounce w-6 h-6 text-amber-900" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>

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
