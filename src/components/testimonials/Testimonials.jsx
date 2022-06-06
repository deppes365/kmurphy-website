import React from 'react';
import './testimonials.scss';
import { reviews } from './reviews';
import {BsStarFill} from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

function Testimonials() {

	return (
		<div className="testimonials">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{reviews.map(({ review, author }, i) => {
					return (
						<SwiperSlide key={i}>
							<div className='reviewContainer'>
                                <div className='rating'><BsStarFill className='icon'/><BsStarFill className='icon'/><BsStarFill className='icon'/><BsStarFill className='icon'/><BsStarFill className='icon'/></div>
                                <p className='review'><em><strong>{review}</strong></em></p>
                                <p className='author'>{author}</p>
                            </div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Testimonials;


