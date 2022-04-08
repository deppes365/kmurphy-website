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
      <div className="container">About</div>
    </div>
  )
}

export default About