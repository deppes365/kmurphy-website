import { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';
import FirstResponders from './pages/FirstResponders';

import { FaPhone } from 'react-icons/fa';
import {getCurrentPage} from "./Functions"

function App() {
	const [contactFormOpen, setContactFormOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('');
	// const [navBarSolid, setNavBarSolid] = useState(false);
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		//When the user scrolls down the site, it changes the navbar to a solid color
		// const homeHeight = document.querySelector('#home').clientHeight;
		// window.addEventListener('scroll', () => {
		// 	if (window.scrollY > homeHeight - 200) {
		// 		setNavBarSolid(true);
		// 	} else {
		// 		setNavBarSolid(false);
		// 	}
		// });
	}, []);

	return (
		<Router>
			<div className="App">
				<a className="callBtn" href="tel:+15408505302">
					<FaPhone />
					<p>Call now!</p>
				</a>
				<Header
					setContactFormOpen={setContactFormOpen}
					activeLink={activeLink}
					setActiveLink={setActiveLink}
					// navBarSolid={navBarSolid}
					menuActive={menuActive}
					setMenuActive={setMenuActive}
				/>
				<Routes>
					<Route path="/" element={<Home setActiveLink={setActiveLink} getCurrentPage={getCurrentPage}/>} />

					<Route
						path="/about"
						element={<About setActiveLink={setActiveLink} getCurrentPage={getCurrentPage}/>}
					/>

					<Route
						path="/services"
						element={
							<>
								<FirstResponders setContactFormOpen={setContactFormOpen} />
								<Services setActiveLink={setActiveLink}/>
							</>
						}
					></Route>
				</Routes>
				<Footer />
				<ContactForm
					setContactFormOpen={setContactFormOpen}
					contactFormOpen={contactFormOpen}
				/>
			</div>
		</Router>
	);
}

export default App;
