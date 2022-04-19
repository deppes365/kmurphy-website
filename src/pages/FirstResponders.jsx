import React, { useEffect, useState } from 'react';
import FirstResponderPostcard from '../assets/images/first-responder-postcard.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper';
import { images } from './firstResponderImages';

function FirstResponders({ setContactFormOpen }) {
	const [slidesPerView, setSlidesPerView] = useState(3);

	const checkWindowSize = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 560 && windowWidth > 350) {
			return setSlidesPerView(1);
		}
		if (windowWidth > 560 && windowWidth < 850) {
			return setSlidesPerView(2);
		}
		if (windowWidth > 850) {
			return setSlidesPerView(3);
		}
	};

	useEffect(() => {
		checkWindowSize();
		window.addEventListener('resize', checkWindowSize);
	}, []);

	return (
		<div className="firstResponders">
			<div className="container">
				<div className="bg"></div>
				<div className="info">
					<div className="content">
						<h1>Are you a First Responder?</h1>
						<h3>
							I've helped First Responders save $22,000 to date when buying
							their homes!
						</h3>
						<button onClick={() => setContactFormOpen(true)}>
							Contact me now!
						</button>
					</div>
					<div className="imgContainer">
						<img src={FirstResponderPostcard} alt="" />
					</div>
				</div>
				<h2>My First Responder Success Stories</h2>
				<Swiper
					navigation={true}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Navigation, Autoplay, Pagination]}
					slidesPerView={slidesPerView}
					spaceBetween={30}
					autoplay={{ delay: 2500 }}
					className="mySwiper"
				>
					{images.map((img, i) => {
						return (
							<SwiperSlide
								style={{
									backgroundImage: `url(${img.img})`,
									backgroundSize: 'cover',
									backgroundPosition: `${i === 1 ? 'top' : 'center'}`,
								}}
							>
								<div className="info">
									<h3>{img.name}</h3>
									<p>{img.type}</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default FirstResponders;
