import React, { useEffect, useRef } from 'react';
import Testimonials from '../components/testimonials/Testimonials';
import { AiOutlineHome } from 'react-icons/ai';
import { TiArrowRightOutline } from 'react-icons/ti';
import { BsFillPinMapFill } from 'react-icons/bs';
import {
	FaRegMoneyBillAlt,
	FaHardHat,
	FaTools,
	FaFileSignature,
} from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { GiPayMoney } from 'react-icons/gi';
import { GoPrimitiveDot } from 'react-icons/go';

function Services({ setActiveLink }) {
	const services = useRef();

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
		<>
			<div className="serviceAreasWrapper">
				<div className="container">
					<h1>Service Areas</h1>
					<ul className="serviceAreas">
						<li>
							<GoPrimitiveDot /> Amelia Courthouse
						</li>
						<li>
							<GoPrimitiveDot /> Chester
						</li>
						<li>
							<GoPrimitiveDot /> Chesterfield
						</li>
						<li>
							<GoPrimitiveDot /> Colonial Heights
						</li>
						<li>
							<GoPrimitiveDot /> Dinwiddie
						</li>
						<li>
							<GoPrimitiveDot /> Goochland
						</li>
						<li>
							<GoPrimitiveDot /> Hanover
						</li>
						<li>
							<GoPrimitiveDot /> Henrico
						</li>
						<li>
							<GoPrimitiveDot /> Manakin Sabot
						</li>
						<li>
							<GoPrimitiveDot /> Mechanicsville
						</li>
						<li>
							<GoPrimitiveDot /> Moseley
						</li>
						<li>
							<GoPrimitiveDot /> Powhatan
						</li>
						<li>
							<GoPrimitiveDot /> Richmond
						</li>
						<li>
							<GoPrimitiveDot /> Sutherland
						</li>
					</ul>
				</div>
			</div>
			<div className="page" id="services" ref={services}>
				<div className="container">
					{/* Service Card Container */}
					<div className="cardsContainer">
						<h1>I specialize in</h1>
						<div className="cards">
							<div className="servicesCard">
								<FaFileSignature className="icon" />
								<p>First Time Homebuyers</p>
							</div>
							<div className="servicesCard">
								<div>
									<AiOutlineHome className="icon" />
									<TiArrowRightOutline className="icon" />
									<AiOutlineHome className="icon" />
								</div>
								<p>Move-Up Buyers</p>
							</div>
							<div className="servicesCard">
								<div>
									<AiOutlineHome className="icon" />
									<TiArrowRightOutline style={{ fontSize: '1.4rem' }} />
									<AiOutlineHome style={{ fontSize: '1.25rem' }} />
								</div>
								<p>Down-size</p>
							</div>
							<div className="servicesCard">
								<div>
									<BsFillPinMapFill className="icon" />
								</div>
								<p>Relocation</p>
							</div>
							<div className="servicesCard">
								<div>
									<FaRegMoneyBillAlt className="icon" />
								</div>
								<p>Resale</p>
							</div>
							<div className="servicesCard">
								<div>
									<FaHardHat className="icon" />
								</div>
								<p>New Construction</p>
							</div>
							<div className="servicesCard">
								<div>
									<RiFilePaper2Line className="icon" />
								</div>
								<p>Divorce</p>
							</div>
							<div className="servicesCard">
								<div>
									<h2>55+</h2>
								</div>
								<p>55+ Community</p>
							</div>
							<div className="servicesCard">
								<div>
									<GiPayMoney className="icon" />
								</div>
								<p>Investing</p>
							</div>
							<div className="servicesCard">
								<div>
									<FaTools className="icon" />
								</div>
								<p>Renovation</p>
							</div>
						</div>
					</div>
					<h1 className='testimonialHeader'>See what others have said about my work</h1>
					<Testimonials />
				</div>
			</div>
		</>
	);
}

export default Services;
