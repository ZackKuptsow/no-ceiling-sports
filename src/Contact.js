import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import env from 'react-dotenv';

const Contact = () => {
	const form = useRef();

	const SERVICE_ID = env.SERVICE_ID;
	const TEMPLATE_ID = env.TEMPLATE_ID;
	const PUBLIC_KEY = env.PUBLIC_KEY;

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};
	return (
		<section
			id="contact"
			className="flex h-screen bg-light py-10 px-2  md:py-40 2xl:py-72"
		>
			<div className="w-full md:w-1/4 flex flex-col justify-evenly m-auto py-1 md:py-8 text-center gap-12 bg-grey-light border-4 border-dark rounded-2xl shadow-lg">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col items-start gap-4 mx-auto text-dark"
				>
					<h1 className="mx-auto text-red-light text-4xl">
						Contact Us
					</h1>
					<div className="flex items-center gap-4">
						<label htmlFor="user_name">Name</label>
						<input
							id="user_name"
							type="text"
							name="user_name"
							className="px-2 py-1 text-sm text-dark bg-grey-light border border-dark rounded-lg shadow-lg focus:outline-red-light focus-visible:ring-0"
						/>
					</div>
					<div className="flex items-center gap-4">
						<label htmlFor="user_email">Email</label>
						<input
							id="user_email"
							type="email"
							name="user_email"
							className="px-2 py-1 text-sm text-dark bg-grey-light border border-dark rounded-lg shadow-lg focus:outline-red-light"
						/>
					</div>

					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						className="px-4 py-2 resize text-sm text-dark bg-grey-light border border-dark rounded shadow-lg focus:outline-red-light"
					/>
					<input
						type="submit"
						value="Send"
						className="px-2 py-1 bg-dark text-light border-1 border-light rounded-lg"
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
