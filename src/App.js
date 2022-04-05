import { useState } from 'react';
import './App.scss';

import Header from './components/header/Header';
import Home from './pages/Home';
import ContactForm from './components/contactForm/ContactForm';


function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <div className="App">
      <Header setContactFormOpen={setContactFormOpen}/>
      <Home />
      <ContactForm setContactFormOpen={setContactFormOpen} contactFormOpen={contactFormOpen}/>
    </div>
  );
}

export default App;
