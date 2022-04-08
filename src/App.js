import { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';


function App() {
	const [contactFormOpen, setContactFormOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('');
	const [navBarSolid, setNavBarSolid] = useState(false);
  const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		const homeHeight = document.querySelector('#home').clientHeight;

		window.addEventListener('scroll', () => {
			if (window.scrollY > homeHeight - 400) {
				setNavBarSolid(true);
			} else {
				setNavBarSolid(false);
			}
		});
	}, []);

	return (
		<div className={`App ${contactFormOpen || menuActive ? 'active' : ''}`}>
			<Header
				setContactFormOpen={setContactFormOpen}
				activeLink={activeLink}
				setActiveLink={setActiveLink}
				navBarSolid={navBarSolid}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
			/>
			<Home setActiveLink={setActiveLink} />
			<About setActiveLink={setActiveLink} />
			<Services setActiveLink={setActiveLink} />
      <Footer />
			<ContactForm
				setContactFormOpen={setContactFormOpen}
				contactFormOpen={contactFormOpen}
			/>
		</div>
	);
}

export default App;
