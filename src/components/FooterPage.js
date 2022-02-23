import React from 'react';
import FooterPageStyles from '../assets/stylesheets/FooterPage.css' 
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

function FooterPage() {
	return(
		<div className="footerContainer">
			<div className="row">
				<div className="column">
					<p className="headerP">Info</p>
					<a href="#">About</a> 
					<a href="#">FAQ</a>
					<a href="#">How it works</a>
				</div>
				<div className="column">
					<a href="#">Blog</a> 
					<a href="#">Press</a>
				</div>
				<div className="column">
					<a href="#">Terms of use</a> 
					<a href="#">Privacy policy</a>
				</div>
				<div className="column">
					<p className="headerP">Contact</p>
					<a href="tel:+2123378901">212-HONCKER</a> 
				</div>
				<div className="column">
					<a href = "mailto: info@honcker.com">info@honcker.com</a> 
					<p className="whiteFont">join our dealer network:</p>
					<a href = "mailto: dealerdesk@honcker.com">dealerdesk@honcker.com</a> 
				</div>
				<div>
					<FaFacebook className="iconStyles" />
					<FaTwitter className="iconStyles" />
					<FaInstagram className="iconStyles" />
				</div>
			</div>
		
		<div>
			<p className="whiteFont">© 2019  Honcker. All rights reserved.</p>
		</div>
	</div>

	);
}

export default FooterPage