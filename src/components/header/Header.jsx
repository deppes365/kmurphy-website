import React from 'react';


function Header({ setContactFormOpen }) {

	const scrollTo = (page) => {
		document.getElementById(`${page}`).scrollIntoView({behavior: 'smooth'})
	}

	return (
		<div className="header">
			<div className="container">
				<div className="logo">
					<h1>Kristin Murphy</h1>
				</div>
				<div className="navContainer">
					<ul className="navLinks">
						<li>
							<a className='navLink' href="#home" onClick={(e) => {
								e.preventDefault()
								scrollTo('home')
							}}>Home</a>
						</li>
						<li>
							<a className='navLink' href="#about" onClick={(e) => {
								e.preventDefault()
								scrollTo('about')
							}}>About</a>
						</li>
						<li>
							<a className='navLink' href="services" onClick={(e) => {
								e.preventDefault()
								scrollTo('services')
							}}>Services</a>
						</li>
						<li>
							<button className='contactBtn' onClick={() => {
								setContactFormOpen(true)
							}}>Contact</button>
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
