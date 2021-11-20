import PB from '../../images/PB_face.jpeg';

export default function AboutMe() {

  return (
    <figure className="lg:flex rounded-xl p-8 md:p-0 my-36">
      <img className="mx-auto rounded-xl filter blur-lg hover:blur-none transition duration-150 cursor-pointer" src={PB} alt="" width="384" height="512" />
      <div className="pt-6 md:p-12 text-center md:text-left space-y-4 dark:text-white">
        <h1 className="text-5xl dark:text-white font-bold">Hi there, again!</h1>
        <blockquote>
          <p className="text-lg font-normal mt-10">
            I am currently a student at Aalborg University, Denmark. I enjoy solving complex problems using my programming skills.
          </p>
        </blockquote>
        <blockquote>
          <p className="text-lg font-normal mt-10">
            Other than that, I love exploring web designs and solutions on complex problems. I'm a huge consumer of reddit too.
          </p>
        </blockquote>
        <blockquote>
          <p className="text-lg font-normal mt-10">
            Outside of University I enjoy playing football and computer games such as Minecraft, FIFA and sometimes simulation games.
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
  )
}