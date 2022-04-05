import React from 'react';
import { FaTimes } from 'react-icons/fa';

function ContactForm({ contactFormOpen, setContactFormOpen }) {
	return (
		<div className={`contactForm ${contactFormOpen && 'active'}`}>
			<form className="form">
				<button
					className="closeBtn"
					onClick={e => {
						e.preventDefault();
						setContactFormOpen(false);
					}}
				>
					<FaTimes />
				</button>
				<h2>Let's work together</h2>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Your name"
					required
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email"
					required
				/>
				<input
					type="text"
					name="subject"
					id="subject"
					placeholder="Subject (optional)"
				/>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Your message..."
					required
				></textarea>
                <button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default ContactForm;
