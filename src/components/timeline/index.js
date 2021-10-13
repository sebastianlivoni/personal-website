export default function TimeLine() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold dark:text-white">My Short Resume & Journey</h1>
      <div className="container mx-auto w-full h-full dark:text-white">
        <div className="relative wrap overflow-hidden pt-8 h-full">
          <h1 className="text-center mb-8 font-bold text-xl">Education</h1>
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border" style={{left: "50%"}}></div>
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-4/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-xs lg:text-lg text-white">2007-2017</h1>
            </div>
            <div className="order-1 bg-custom-dark-gray-2 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-sm lg:text-xl">Primary school</h3>
              <p className="text-xs lg:text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">I started my time in primary school in 2007 and graduated in June 2017.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-4/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-xs lg:text-lg">2017-2018</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-sm lg:text-xl">Ingstrup Efterskole (Continuation School)</h3>
              <p className="text-xs lg:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">After I graduated in 2017, I went to a continuation school just outside Løkken in Denmark called Ingstrup Efterskole. My elective was football, which is why I also played a lot of football during the school year.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-4/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-xs lg:text-xl text-white">2018-2021</h1>
            </div>
            <div className="order-1 bg-custom-dark-gray-2 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-sm lg:text-xl">Aalborg Business College, Turøgade</h3>
              <p className="text-xs lg:text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">After after school I started at Aalborg Business School. Here I went for 3 years and graduated in June 2021. My electives was focused on Mathematics and International Economics.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-4/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-xs lg:text-lg">2021-2026</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-sm lg:text-xl">Computer Science at Aalborg University</h3>
              <p className="text-xs lg:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Programming is my biggest passion and I really want to work with what I love. Therefore I applied to Computer Science at Aalborg University. I was admitted in September 2021 and therefore I am currently studying computer science.</p>
            </div>
          </div>

        </div>
        <div className="relative wrap overflow-hidden pt-8 h-full">
          <h1 className="text-center mb-8 font-bold text-xl">Experience</h1>
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border" style={{left: "50%"}}></div>
          {/*<div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2007-2017</h1>
            </div>
            <div className="order-1 bg-custom-dark-gray-2 rounded-xl shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold h-6 w-full bg-custom-dark-blue animate-pulse text-gray-800 text-xl"></h3>
              <p className="text-sm leading-snug tracking-wide bg-custom-dark-blue text-opacity-100 h-6 w-full"></p>
              <p className="text-sm leading-snug tracking-wide bg-custom-dark-blue text-opacity-100 h-6 w-full"></p>
            </div>
          </div>*/}

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-4/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-xs lg:text-lg">xxxx-xxxx</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white bg-custom-gradient-start text-xl w-full h-6 rounded-md"></h3>
              <p className="text-xs lg:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 bg-custom-gradient-start h-20 w-full rounded-md"></p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}