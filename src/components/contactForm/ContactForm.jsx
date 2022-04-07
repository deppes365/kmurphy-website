import React from 'react';
import { FaTimes, FaRegBuilding } from 'react-icons/fa';
import {FiPhone} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'
import headshot from '../../assets/images/headshot.jpg'

function ContactForm({ contactFormOpen, setContactFormOpen }) {

	
	return (
		<div className={`contactForm ${contactFormOpen && 'active'}`} onClick={(e) => {
			e.target.classList.contains('contactForm') && contactFormOpen && setContactFormOpen(false)
		}}>
			<div className="contactContent">
				<button
					className="closeBtn"
					onClick={e => {
						e.preventDefault();
						setContactFormOpen(false);
					}}
				>
					<FaTimes />
				</button>
				<form className="form">
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
					<button type="submit">Submit</button>
				</form>
				<div className="contactInfo">
					<div className="imgContainer">
						<img src={headshot} alt="" />
					</div>
					<div className="contactDiv">
						<FiPhone />
						<p>+1(804)555-5555</p>
					</div>
					<div className="contactDiv">
						<MdOutlineEmail /> 
						<p>kmurphy@server.com</p>
					</div>
					<div className="contactDiv">
						<FaRegBuilding />
						<p>123 Main St.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
