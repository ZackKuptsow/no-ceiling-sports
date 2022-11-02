const Main = () => {
	return (
		<section
			id="home"
			className="h-screen bg-[url('../public/images/bw_ball.avif')] bg-no-repeat bg-cover text-light"
		>
			<div className="object-fill h-screen w-screen m-0 backdrop-blur-sm">
				<div className="flex">
					<div className="flex flex-auto flex-col mt-20 md:mt-24 2xl:mt-28 text-center mx-auto md:px-96">
						<h1
							className="h-fit md:ml-96 text-center text-6xl md:text-8xl 2xl:text-9xl font-bold drop-shadow-lg shadow-dark"
							x-intersect="$el.classList.add('animate-fadeInUp')"
						>
							<span className="text-red-light">NO</span>CEILING
							SPORTS
						</h1>
						<p
							className="items-center md:w-3/4 mt-10 md:mt-12 2xl:mt-40 md:ml-80 mx-auto md:mx-12 2xl:mx-0 text-center md:text-4xl drop-shadow-lg shadow-dark"
							x-intersect="$el.classList.add('animate-[fadeInUp_1s_ease-in_1s_1_normal_backwards_running]')"
						>
							Positioned in a growing, $1 billion market in the
							sports industry, NoCeiling Sports is a full-service
							marketing agency whose focus is on building the
							personal brands of international student-athletes.{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
