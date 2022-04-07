import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

function Header({ setContactFormOpen }) {
	return (
		<div className="header">
			<div className="container">
				<div className="logo">
					<h1>Kristin Murphy</h1>
				</div>
				<div className="navContainer">
					<ul className="navLinks">
						<li>
							<a className="navLink" href="#">
								Home
							</a>
						</li>
						<li>
							<a className="navLink" href="#">
								About
							</a>
						</li>
						<li>
							<a className="navLink" href="#">
								Services
							</a>
						</li>
						<li>
							<a
								className="contact-btn"
								href="#"
								onClick={e => {
									e.preventDefault();
									setContactFormOpen(true);
								}}
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="hamburger">
					<div className="topLine"></div>
					<div className="middleLine"></div>
					<div className="bottomLine"></div>
				</div>
			</div>
		</div>
	);
}

export default Header;
