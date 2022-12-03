import Image from "next/image"
import useDarkMode from "../lib/useDarkMode"
import greogorianAge from "../utils/greogorianAge"

export default function Jumbotron() {
	return (
		<section id="jumbotron">
			<div className="flex justify-center items-center h-screen min-h-fit tracking-wide">
				<div className="absolute mx-auto z-1 pointer-events-none">
					<Image
						src="/colorful_bg.png"
						alt="Background Gradient"
						height={600}
						width={700}
					/>
				</div>
				<div className="max-w-sm sm:max-w-xl mx-12 my-40 z-30">
					<h1 className="text-7xl sm:text-8xl md:text-9xl font-medium mb-3 dark:text-white">
						Hi there!
					</h1>
					<h5 className="text-md sm:text-xl font-light text-gray-700 dark:text-white">
						I&apos;m Sebastian, a{" "}
						{greogorianAge("September 24, 2001")} year old upcoming
						full stack developer with a deep desire to develop in
						JavaScript and Swift. Explore this page to learn more
						about my journey.
					</h5>
				</div>
			</div>
		</section>
	)
}
