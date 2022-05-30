export default function Skills(props) {
  return (
    <div className="dark:text-white my-20">
      <h1 className="text-center text-3xl font-bold mt-10">{props.title}</h1>
      <p className="my-7 text-center" >{props.desc}</p>
      <div className="flex flex-wrap justify-center space-x-4">
        {props.skills.map((item, i) => (
          <p key={i} className="shadow-xl px-6 py-3 mb-4 bg-red-400 hover:bg-red-500 cursor-pointer rounded-lg text-sm text-white">{item}</p>
          ))}
      </div>
    </div>
  )
}