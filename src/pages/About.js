import Footer from '../components/footer';
import Contact from '../components/contact';
import Nav from '../components/navigation/nav.jsx';
import TimeLine from '../components/timeline/index.jsx';
import AboutMe from '../components/about';
import Skills from '../components/skills';

const timelinesitems = [
  {
    title: "Primary school",
    desc: "I started my time in primary school in 2007 and graduated in June 2017.",
    year_from: "2007",
    year_to: "2017"
  },
  {
    title: "Ingstrup Efterskole (Continuation School)",
    desc: "After I graduated in 2017, I went to a continuation school just outside Løkken in Denmark called Ingstrup Efterskole. My elective was football, which is why I also played a lot of football during the school year.",
    year_from: "2017",
    year_to: "2018"
  },
  {
    title: "Aalborg Business College, Turøgade",
    desc: "After after school I started at Aalborg Business School. Here I went for 3 years and graduated in June 2021. My electives was focused on Mathematics and International Economics.",
    year_from: "2018",
    year_to: "2021"
  },
  {
    title: "Computer Science at Aalborg University",
    desc: "Programming is my biggest passion and I really want to work with what I love. Therefore I applied to Computer Science at Aalborg University. I was admitted in September 2021 and therefore I am currently studying computer science.",
    year_from: "2021",
    year_to: "2026"
  },
]

const experience = [
  {
    title: "Spar Vestbjerg (Super Market)",
    desc: "While studying on Business College I was working as Cashier at the local super market.",
    year_from: "2017",
    year_to: "2019"
  },
  {
    title: "Pakke.dk",
    desc: "I'm currently working as a Warehouse Employee and Software Developer at Pakke.dk",
    year_from: "2019",
    year_to: "now"
  },
  {
    title: "Perlemust.dk",
    desc: "I'm currently also working as a Shopify Agent and Web Developer at Perlemust.dk. I am further developing the website with new information and designs.",
    year_from: "2020",
    year_to: "now"
  }
]

export default function AboutPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <AboutMe />

            <h1 className="text-center text-3xl font-bold dark:text-white">My Short Resume & Journey</h1>
            <TimeLine title={"Education"} items={timelinesitems} />
            <TimeLine title={"Experience"} items={experience} />
            <Skills />
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
