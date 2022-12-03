export default function AboutMe() {
	return (
		<section className="lg:flex rounded-xl p-8 md:p-0 my-36" id="about-me">
			<img
				className="mx-auto rounded-xl"
				src="./foto.jpeg"
				alt=""
				width="384"
				height="300"
			/>
			<div className="pt-6 md:p-12 text-center md:text-left space-y-4 dark:text-white">
				<h1 className="text-5xl dark:text-white font-bold">
					Hi there, I&apos;m Sebastian!
				</h1>
				<blockquote>
					<p className="text-lg font-normal mt-10">
						I am currently a student at Aalborg University, Denmark.
						I enjoy solving{" "}
						<span className="bg-gradient-to-br bg-clip-text text-transparent from-pink-400 to-red-600 font-bold">
							complex
						</span>{" "}
						problems using my programming skills.
					</p>
				</blockquote>
				<blockquote>
					<p className="text-lg font-normal mt-10">
						Other than that, I love exploring web designs and
						programming stuff. I&apos;m a huge consumer of reddit
						too.
					</p>
				</blockquote>
				<blockquote>
					<p className="text-lg font-normal mt-10">
						Outside of University I enjoy playing football and
						computer games such as Minecraft, FIFA and sometimes
						simulation games.
					</p>
				</blockquote>
				<figcaption className="font-medium">
					<div>Sebastian Livoni</div>
					<div className="text-gray-500">Aalborg, Denmark</div>
				</figcaption>
			</div>
		</section>
	)
}
