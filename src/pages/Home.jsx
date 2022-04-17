import React, {useEffect, useRef} from 'react'
import Headshot from '../assets/images/headshot.jpg'

function Home({setActiveLink}) {
  const home = useRef()

  useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setActiveLink('home');
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(home.current);
	}, [setActiveLink]);

  return (
    <div className='page' id='home' ref={home}>
        <div className="container">
            <div className="homeContent">
              <div className="homeInfo card">
                <h1>Kristin Murphy, Mission Realty brokered by eXp Realty</h1>
                <h3>55+ Homes sold in 2021</h3>
              </div>
              <div className="homeImgContainer">
                <img src={Headshot} alt="" />
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home