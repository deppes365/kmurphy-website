import React, {useEffect, useState} from 'react';
import patentLogo from '../../assets/images/patentrealtorlogo-white.png';
import { Link } from 'react-router-dom';

function Header({
	setContactFormOpen,
	activeLink,
	menuActive,
	setMenuActive,
}) {

	const [page, setPage] = useState(false)
	const onClick = () => {
		setMenuActive(prevState => !prevState);
	};

	

	useEffect(()=> {
		console.log(activeLink);
		if(activeLink === 'services' || activeLink === 'about') {
			setPage(true)
		} else {
			setPage(false)
		}
	}, [activeLink])

	return (
		<div className={`header ${page ? 'active' : ''}`}>
			<div className="container">
				<div className="logo">
					<h1>Kristin Murphy</h1>
					<img src={patentLogo} alt="" />
				</div>
				<div className="navContainer">
					<ul
						className={`navLinks ${menuActive && 'active'}`}
						onClick={onClick}
					>
						<li>
							<Link
								className={`navLink ${activeLink === 'home' ? 'active' : ''}`}
								to="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={`navLink ${activeLink === 'about' ? 'active' : ''}`}
								to="/about"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className={`navLink ${
									activeLink === 'services' ? 'active' : ''
								}`}
								to="/services"
							>
								Services
							</Link>
						</li>
						<li>
							<button
								className="contactBtn"
								onClick={() => {
									setContactFormOpen(() => true);
								}}
							>
								Contact
							</button>
						</li>
					</ul>
				</div>
				<div
					className={`hamburger ${menuActive && 'active'}`}
					onClick={onClick}
				>
					<div className="topLine"></div>
					<div className="middleLine"></div>
					<div className="bottomLine"></div>
				</div>
			</div>
		</div>
	);
}

export default Header;
