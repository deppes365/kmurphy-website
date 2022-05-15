import React, {useEffect, useRef} from 'react'

function About({setActiveLink}) {
  const about = useRef()

  useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setActiveLink('about');
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(about.current);
	}, [setActiveLink]);

  return (
    <div className='page' id='about' ref={about}>
      <div className="container">
		  <h1>About Me</h1>
		  <div className="about-content">
			  <p>My name is Kristin Murphy, boy mom of three, wife of a police officer and veteran. I have been passionate about helping people my entire life. I spent 9 wonderful years in the medical field but had to make a change as my family grew. I went in search of a career with a better work-life balance that allowed me to continue to serve people. Insert the exciting world of real estate! </p>
			  <p>Nothing is more exciting to me than the gratifying feeling I get from helping people meet their real estate needs. You can count on me to always do what is in your best interest and negotiate the best deal possible for you. I pride myself on being honest, trustworthy, hardworking, communicative, and knowledgeable in the real estate market. I know how important it is to find your dream home or get the best offer for your property! I live into our mission statement which is to Improve Lives, Families, & Communities, driven by our core values of Do Right, Do Well, Do Good, and Have Fun.</p>
			  <p>Call or email me today and lets make your dreams come true! I cannot wait to work with you!</p>
			  <a className="about-cta" href="">Learn more about me on Zillow!</a>
		  </div>
	  </div>
    </div>
  )
}

export default About