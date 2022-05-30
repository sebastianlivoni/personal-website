import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Nav from '../components/navigation/nav.jsx';
import TimeLine from '../components/timeline/index.jsx';
import AboutMe from '../components/about';
import Skills from '../components/skills';

const timelinesitems = [
  {
    title: "Computer Science at Aalborg University",
    desc: "Programming is my biggest passion and I really want to work with what I love. Therefore I applied to Computer Science at Aalborg University. I was admitted in September 2021 and therefore I am currently studying computer science finishing the 2nd semester this spring.",
    year_from: "2021",
    year_to: "2026"
  },
  {
    title: "Aalborg Business College, Turøgade",
    desc: "After after school I started at Aalborg Business School. Here I went for 3 years and graduated in June 2021. My electives was focused on Mathematics and International Economics.",
    year_from: "2018",
    year_to: "2021"
  },
  {
    title: "Ingstrup Efterskole (Continuation School)",
    desc: "After I graduated in 2017, I went to a continuation school just outside Løkken in Denmark called Ingstrup Efterskole. My elective was football, which is why I also played a lot of football during the school year.",
    year_from: "2017",
    year_to: "2018"
  },
  {
    title: "Primary school",
    desc: "I started my time in primary school in 2007 and graduated in June 2017.",
    year_from: "2007",
    year_to: "2017"
  }
]

const experience = [
  {
    title: "Perlemust.dk",
    desc: "I'm currently also working as a Shopify Agent and Web Developer at Perlemust.dk. I am further developing the website with new information and designs.",
    year_from: "2020",
    year_to: "2022"
  },
  {
    title: "Pakke.dk",
    desc: "I was working as a a Customer Service and Warehouse Employee at Pakke.dk. I have also made smaller software solutions for Pakke.dk",
    year_from: "2019",
    year_to: "2022"
  },
  {
    title: "Spar Vestbjerg (Super Market)",
    desc: "While studying on Business College I was working as Cashier at the local super market.",
    year_from: "2017",
    year_to: "2019"
  }
]

const skills = ["JavaScript", "React", "Tailwind CSS", "Shopify", "Bootstrap", "C", "Git"]
const compentencies = ["IT", "Communication", "Support", "Flexible", "Googling", "Solution-oriented", "Structured", "Targeted", "Self employed", "Teamplayer"]

export default function AboutPage() {

  useEffect(() => {
    document.title = "Livoni.me | About me";
  });

  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <Nav sticky={false} />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <div className="mx-8">
            <AboutMe />

            <Skills skills={compentencies} title="Core compentencies" desc={<span>The good old adjectives.</span>} />

            <h1 className="text-center text-3xl font-bold dark:text-white">My Resume & Journey</h1>
            <TimeLine title={"Education"} items={timelinesitems} />
            <TimeLine title={"Experience"} items={experience} />

            <Skills skills={skills} title="Programming Skills" desc="These are the areas that I have experience with." />
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// {/* If you want to know more, <span className='bg-gradient-to-br bg-clip-text text-transparent from-white to-white from-pink-400 to-red-600 font-bold font-normal'>click</span> on the adjective. /*}