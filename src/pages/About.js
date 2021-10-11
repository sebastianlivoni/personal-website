import Nav from '../components/navigation/nav';
import TimeLine from '../components/timeline';
import PB from '../images/PB_face.jpeg';

function AboutPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition md:pb-0">
        <Nav />
        <div className="max-w-6xl mx-auto tracking-wide pb-5">
          <figure className="md:flex bg-white rounded-xl p-8 md:p-0 mx-8 shadow-md my-36">
            <img className="rounded-l-xl" src={PB} alt="" width="384" height="512" />
            <div className="pt-6 md:p-12 text-center md:text-left space-y-4">
              <h1 className="text-5xl dark:text-white font-bold">Hi there, again!</h1>
              <blockquote>
                <p className="text-lg font-normal mt-10">
                  I am currently a student at Aalborg University, Denmark. I enjoy solving complex problems using my programming skills.
                </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-normal mt-10">
                  I love exploring web designs and solutions on complex problems.
                </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-normal mt-10">
                  Outside of University I enjoy playing football and playing computer games such as Minecraft, FIFA and simulation games.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600">
                  Sebastian Livoni
                </div>
                <div className="text-gray-500">
                  Aalborg, Denmark
                </div>
              </figcaption>
            </div>
          </figure>
          <h1 className="text-center text-3xl font-bold">My Short Resume</h1>
          <TimeLine />
          <h1 className="text-center text-3xl font-bold mt-10">Skills</h1>
          <h2>Tailwind CSS</h2>
          <h2>Bootstrap</h2>
          <h2>React</h2>
          <h2>JavaScript</h2>
          <h2>C</h2>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
