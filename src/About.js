const About = () => {
	return (
		<section
			id="about_us"
			className="flex px-12 h-screen text-light bg-dark"
		>
			<div className="justify-evenly m-auto text-md md:text-xl 2xl:text-4xl">
				<div className="flex flex-col m-auto text-center gap-4 md:gap-12">
					<p>testing force rebuild - remove later</p>
					<p x-intersect="$el.classList.add('animate-fadeInUp')">
						Our mission is to level the playing field for
						international student-athletes, giving them the
						necessary support to succeed outside the game. By
						utilizing our social media marketing and business
						experience as well as working with experts in
						immigration and sports law, we empower student-athletes,
						maximizing the potential of their Name, Image, and
						Likeness. With{' '}
						<span className="text-red-light">No</span>Ceiling
						Sports’ thorough process and consistent commitment to
						player safety, international student-athletes can
						finally feel confident in their ability to take
						advantage of their NIL.{' '}
					</p>
					<p x-intersect="$el.classList.add('animate-[fadeInUp_1s_ease-in_1s_1_normal_backwards_running]')">
						We work collaboratively with student-athletes to ensure
						successful brand deals. By finding deals, negotiating
						with brands, and providing social media management, we
						help student-athletes to navigate the uncharted
						territory of NIL deals.{' '}
					</p>
					<p x-intersect="$el.classList.add('animate-[fadeInUp_1s_ease-in_2s_1_normal_backwards_running]')">
						With unmatched passion and expertise,{' '}
						<span className="text-red-light">No</span>Ceiling Sports
						is committed to expanding the NIL market for
						international student-athletes.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
