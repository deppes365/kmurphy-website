import React, { useRef } from 'react';
import { FaTimes, FaRegBuilding } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import headshot from '../../assets/images/headshot.jpg';
import MissionLogo from '../../assets/images/missionrealtylogo.jpg';
import equalOppLogo from '../../assets/images/equalopportunity.png';
import emailjs from '@emailjs/browser';

function ContactForm({ contactFormOpen, setContactFormOpen }) {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_1tt0qcl',
				'template_plpi69g',
				form.current,
				'X7qrmd1AJgJ3usz6U'
			)
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
		<div
			className={`contactForm ${contactFormOpen && 'active'}`}
			onClick={e => {
				e.target.classList.contains('contactForm') &&
					contactFormOpen &&
					setContactFormOpen(prevState => !prevState);
			}}
		>
			<div className="contactContent">
				<button
					className="closeBtn"
					onClick={e => {
						e.preventDefault();
						setContactFormOpen(prevState => !prevState);
					}}
				>
					<FaTimes />
				</button>
				<form className="form" ref={form} onSubmit={sendEmail}>
					<h2>Let's work together</h2>
					<input
						type="text"
						name="from_name"
						id="name"
						placeholder="Your name"
						required
					/>
					<input
						type="email"
						name="from_email"
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
					<button type="submit" value="Send">
						Submit
					</button>
				</form>
				<div className="contactInfo">
					<div className="headshotContainer">
						<img src={headshot} alt="" />
					</div>
					<div className="contactDiv">
						<FiPhone />
						<p>+1(540)850-5302</p>
					</div>
					<div className="contactDiv">
						<MdOutlineEmail />
						<p>kristin@missionrealty.com</p>
					</div>
					<div className="contactDiv">
						<FaRegBuilding />
						<p>3701 Cox Rd. Richmond, Va 23233</p>
					</div>
					<div className="imgContainer">
						<img className="missionLogo" src={MissionLogo} alt="" />
						<img className="equalOppLogo" src={equalOppLogo} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
