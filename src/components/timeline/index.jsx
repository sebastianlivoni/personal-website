export default function TimeLine(props) {
  return (
    <>
      <div className="container mx-auto w-full h-full dark:text-white">
        <div className="relative wrap overflow-hidden pt-8 h-full">
          <h1 className="text-center mb-8 font-bold text-xl">{props.title}</h1>
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border" style={{left: "50%"}}></div>

          {props.items.map((item, i) => (

            <div key={i} className={i % 2 === 0 ? "mb-8 flex justify-between items-center w-full" : "mb-8 flex justify-between items-center w-full flex-row-reverse"}>
              <div className="order-1 w-4/12 lg:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-xs lg:text-lg text-white">{item.year_from}-{item.year_to}</h1>
              </div>
              <div className={i % 2 === 0 ? "order-1 bg-custom-dark-gray-2 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4" : "order-1 bg-red-400 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4"}>
                <h3 className="mb-3 font-bold text-white text-sm lg:text-xl">{item.title}</h3>
                <p className="text-xs lg:text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">{item.desc}</p>
              </div>
            </div>

            ))}

        </div>
      </div>
    </>
  )
}

{/*export default function TimeLine() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold dark:text-white">My Short Resume & Journey</h1>
      <div className="container mx-auto w-full h-full dark:text-white">
        <div className="relative wrap overflow-hidden pt-8 h-full">
          <h1 className="text-center mb-8 font-bold text-xl">Education</h1>
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border" style={{left: "50%"}}></div>

          {timelinesitems.map((item, i) => (

            <div className={i % 2 === 0 ? "mb-8 flex justify-between items-center w-full" : "mb-8 flex justify-between items-center w-full flex-row-reverse"}>
              <div className="order-1 w-4/12 lg:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-xs lg:text-lg text-white">{item.year_from}-{item.year_to}</h1>
              </div>
              <div className={i % 2 === 0 ? "order-1 bg-custom-dark-gray-2 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4" : "order-1 bg-red-400 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4"}>
                <h3 className="mb-3 font-bold text-white text-sm lg:text-xl">{item.title}</h3>
                <p className="text-xs lg:text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">{item.desc}</p>
              </div>
            </div>

            ))}

        </div>
        <div className="relative wrap overflow-hidden pt-8 h-full">
          <h1 className="text-center mb-8 font-bold text-xl">Experience</h1>
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border" style={{left: "50%"}}></div>
          

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-4/12 lg:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-20 lg:w-32 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-xs lg:text-lg">xxxx-xxxx</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-xl shadow-xl w-4/12 lg:w-5/12 px-6 py-4">
              <div className="mb-3 font-bold text-white bg-custom-gradient-start text-xl w-full h-6 rounded-md"></div>
              <p className="text-xs lg:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 bg-custom-gradient-start h-20 w-full rounded-md"></p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}*/}