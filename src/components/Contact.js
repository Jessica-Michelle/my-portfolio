import React, { useState } from 'react';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};

	function handleSubmit(e) {
		e.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name, email, message }),
		})
			.then(() => alert('Message sent!'))
			.catch((error) => alert(error));
	}

	const renderForm = () => {
		return (
			<form
				data-netlify="true"
				name="contact"
				className="ui form"
				onSubmit={handleSubmit}
			>
				<div className="field">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="field">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="field">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<button type="submit" className="ui basic violet button">
					Submit
				</button>
			</form>
		);
	};

	return (
		<div id="contact">
			<div class="ui divider"></div>
			<h1>Contact</h1>
			<div className="ui hidden divider"></div>
			{renderForm()}
			{console.log(name, email, message)}
		</div>
	);
};

export default Contact;

<form
	netlify
	name="contact"
	className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
>
	<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
		Hire Me
	</h2>
	<p className="leading-relaxed mb-5">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit
		officia aspernatur veritatis. Asperiores, aliquid?
	</p>
	<div className="relative mb-4">
		<label htmlFor="name" className="leading-7 text-sm text-gray-400">
			Name
		</label>
		<input
			type="text"
			id="name"
			name="name"
			className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
		/>
	</div>
	<div className="relative mb-4">
		<label htmlFor="email" className="leading-7 text-sm text-gray-400">
			Email
		</label>
		<input
			type="email"
			id="email"
			name="email"
			className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
		/>
	</div>
	<div className="relative mb-4">
		<label htmlFor="message" className="leading-7 text-sm text-gray-400">
			Message
		</label>
		<textarea
			id="message"
			name="message"
			className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
		/>
	</div>
	<button
		type="submit"
		className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
	>
		Submit
	</button>
</form>;
