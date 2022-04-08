import React from 'react';
import EqualOpportunity from '../../assets/images/equalopportunity-white.png';
import MissionRealtyLogo from '../../assets/images/missionrealtylogo.jpg';

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<p>
					Copyright &copy; {new Date().getFullYear()} Kristin Murphy. All Rights
					Reserved
				</p>
				<div className="images">
					<img className="eoLogo" src={EqualOpportunity} alt="" />
					<img className="mrLogo" src={MissionRealtyLogo} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
