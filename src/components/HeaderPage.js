import React, { useState, useEffect } from 'react';

import  '../assets/stylesheets/HeaderPage.css';

import { FaCarSide, FaRegHeart, FaCaretDown} from 'react-icons/fa';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
  	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	
	const toggleNav = () => {
    	setToggleMenu(!toggleMenu)
  	}

	useEffect(() => {

		const changeWidth = () => {
		setScreenWidth(window.innerWidth);
		}

		window.addEventListener('resize', changeWidth)

		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, []);

	return (
		
				<nav>
				{(toggleMenu || screenWidth > 500) && (
					<ul className="list">
					
						<li  className="items hideMobileView">
							<h1 className="logo" href="#logo">Onpoint Company LLC</h1>
						</li>
						<li className="items">
							<FaCarSide className="sygStyles"/> &nbsp;&nbsp;
							<a href="#myLease">My Lease</a>
						</li>
						
						<li className="items">
							<FaRegHeart className="sygStyles" /> &nbsp;&nbsp;
							<a href="#myShowroom">My Showroom</a></li>
						
						<li className="items" style={{paddingRight: "0px"}}>
							<a href="#accountDetails">Hello, Tom</a>
							<FaCaretDown className="sygStyles" />
						</li>	
					</ul>
					)}

					<button onClick={toggleNav} className="btn">Menu</button>
				</nav>
		
	
	);
};
export default Header;