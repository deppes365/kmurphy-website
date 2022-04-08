import { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import ContactForm from './components/contactForm/ContactForm';

function App() {
	const [contactFormOpen, setContactFormOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('');
	const [navBarSolid, setNavBarSolid] = useState(false);

	useEffect(() => {
    const homeHeight = document.querySelector('#home').clientHeight

    window.addEventListener('scroll', () => {
      if(window.scrollY > (homeHeight - 500)) {
        setNavBarSolid(true)
      } else {
        setNavBarSolid(false)
      }
    })
	}, []);

	return (
		<div className="App">
			<Header
				setContactFormOpen={setContactFormOpen}
				activeLink={activeLink}
				setActiveLink={setActiveLink}
				navBarSolid={navBarSolid}
			/>
			<Home setActiveLink={setActiveLink} />
			<About setActiveLink={setActiveLink} />
			<Services setActiveLink={setActiveLink} />
			<ContactForm
				setContactFormOpen={setContactFormOpen}
				contactFormOpen={contactFormOpen}
			/>
		</div>
	);
}

export default App;
