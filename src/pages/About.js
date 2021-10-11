import Nav from '../components/navigation/nav';
import PB from '../images/PB_face.jpeg';

function AboutPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <div> {/* This div is for sticky navbar to not overflow with other content */}
          <Nav />
          <div className="max-w-6xl mx-auto h-screen tracking-wide mt-32">
            <figure className="md:flex bg-white rounded-xl p-8 md:p-0 mx-8 shadow-md">
              <img className="rounded-l" src={PB} alt="" width="384" height="512" />
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
          </div>
          {/*<div className="flex justify-center h-screen tracking-wide">
            <div className="max-w-sm sm:max-w-lg lg:max-w-xl mt-20 mx-12 z-30">
              <h1 className="text-6xl dark:text-white font-bold">Hi there, again!</h1>
              <h5 className="mt-12 text-md lg:text-xl font-light text-gray-700 dark:text-white">I am currently a student at Aalborg University, Denmark. I enjoy solving complex problems using my programming skills.</h5>
              <h5 className="mt-12 text-md lg:text-xl font-light text-gray-700 dark:text-white">I love exploring web designs and solutions on complex problems.</h5>
              <h5 className="mt-12 text-md lg:text-xl font-light text-gray-700 dark:text-white">Outside of University I enjoy playing football and playing computer games such as Minecraft, FIFA and simulation games.</h5>
            </div>
            <div className="">
              <img className="rounded-xl" src={PB} height="300px" width="350px"></img>
            </div>
          </div>*/}
        </div>
      </div>
    </>
  );
}

export default AboutPage;
