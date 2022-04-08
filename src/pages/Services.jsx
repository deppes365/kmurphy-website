import React, {useEffect, useRef} from 'react'

function Services({setActiveLink}) {

  const services = useRef()

  useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setActiveLink('services');
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(services.current);
	}, [setActiveLink]);

  return (
    <div className='page' id='services' ref={services}>
      <div className="container">Services</div>
    </div>
  )
}

export default Services