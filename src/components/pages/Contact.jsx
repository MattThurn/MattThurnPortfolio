import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import IconBar from "../IconBar";

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_KEY,
				import.meta.env.VITE_TEMPLATE_KEY,
				form.current,
				import.meta.env.VITE_API_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					e.target.reset();
					alert("Message Sent, Thank You!");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div>
			<div>
				<h1 className="contact-header">Contact</h1>
			</div>
			<form className="form-container" ref={form} onSubmit={sendEmail}>
				<label className="form-label">Name:</label>
				<input
					className="form-input"
					type="text"
					placeholder="Your name"
					name="user_name"
				/>
				<label className="form-label">Email:</label>
				<input
					className="form-input"
					type="email"
					placeholder="Your email"
					name="user_email"
				/>
				<label className="form-label">Message:</label>
				<textarea
					className="form-input"
					placeholder="Your message"
					name="message"
				/>
				<input className="submit-btn" type="submit" value="Send" />
			</form>
			<div>
				<IconBar />
			</div>
		</div>
	);
}

export default Contact;
