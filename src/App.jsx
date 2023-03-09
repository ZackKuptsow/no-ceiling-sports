import Main from './Main';
import About from './About';
import Contact from './Contact';
import './style.css';

function App() {
	return (
		<div className="antialiased App font-glook z-40" x-data>
			<header className="mx-auto px-2 py-4 sm:p-6 text-dark bg-grey-light sticky top-0 z-10">
				<div className="flex justify-around md:mr-12 px-12">
					<nav className="flex justify-start items-center w-full">
						<a href="#home" className="text-3xl">
							<span className="text-red-light">No</span>Ceiling
							Sports
						</a>
					</nav>
					<nav className="flex justify-end items-center w-full ml-4 md:ml-0 gap-6 md:gap-12 text-sm md:text-xl">
						<a href="#about_us">About Us</a>
						<a href="#contact">Contact</a>
					</nav>
				</div>
			</header>
			<Main />
			<About />
			<Contact />
			<div className="w-screen h-12 p-4 bg-dark text-grey-dark flex justify-end items-center">
				<h1>
					Site created by{' '}
					<a href="http://www.kups.me" className="underline">
						Zack Kuptsow
					</a>
				</h1>
			</div>
		</div>
	);
}

export default App;
