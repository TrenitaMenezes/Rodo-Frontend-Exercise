import React,  {useState}  from 'react';
import data  from "../CAR_INVENTORY_DATA.json";
import {card,container} from '../assets/stylesheets/SearchPage.css'; 
import { FaInfoCircle,FaGasPump, FaLuggageCart } from 'react-icons/fa';
import { GiCarSeat, GiSteeringWheel, GiCarWheel, GiGearStickPattern,GiDoor,GiPhotoCamera,GiMoon,GiGps } from "react-icons/gi";
import carImage from '../assets/graycar.jpg';
function SearchItem(props){
	
	
	const filterData = data.filter((el) => {
		//if no input return entire data
		if(props.input === ''){
			return el;
		}
		console.log(el.make);
	//	props.updateNumOfCars = el.length;
		return (el.make.toLowerCase().includes(props.input) || el.model.toLowerCase().includes(props.input));	
	})
	props.updateNumOfCars(filterData.length);
	console.log(filterData.length);
	
	return (
	
       <ul>
            {filterData.map((item) => (
                <div className="card">
					<div  className="container">
						<li style={{textAlign:"left"}}>
							<h2 style={{color:'#057eaf'}} key={item.id}>{item.make} {item.model}, {item.model_year}</h2>	
						</li>
						<div className="topPanel">
							<div className="leftPanel">
								<h2 style={{color:'#6e6e6e', marginTop:'0px'}}>{item.monthly_payment}</h2>
								<p style={{color:'#9e9e9e'}} className="addLineHeight">MONTHLY PAYMENT</p>
								<p style={{color:'#9e9e9e', fontWeight:'700'}} className="addLineHeight">Over 36 months</p>
								<hr/>
								<h2 style={{color:'#6e6e6e', marginTop:'0px'}}>$1,200</h2>
								<p style={{color:'#9e9e9e'}} className="addLineHeight">DUE AT SIGNING <FaInfoCircle title="Amount due at signing"></FaInfoCircle></p>
								<hr/>
							</div>
							<div className="rightPanel">
								<div className="colorBox">
									<div className="blueRectangle"></div>
									<div className="addDisplayInlineBlock">Exterior: Metalic White</div>
								</div>
								<div className="colorBox">
									<div className="blackRectangle"></div>
									<div className="addDisplayInlineBlock">Exterior: Metalic Black</div>
								</div>
							</div>
						</div>
					<div>
						<img className="imgStyles" src={carImage} alt="Gray Car"/>
					</div>
					<div className="bottomPanel">
						<div>
							<li><GiCarSeat /> 5 seats (bench)</li>
							<li><GiSteeringWheel />18"/8" wheels</li>
							<li><GiCarWheel /> 6 CYL AWD</li>
							<li><FaLuggageCart />cargo space 27.1</li>
							<li><GiGearStickPattern />automatic</li>
						</div>
						<div>
							<li><GiDoor /> 4 doors</li>
							<li><GiGps />GPS Navigation</li>
							<li><FaGasPump /> mileage</li>
							<li><GiPhotoCamera />rear view camera</li>
							<li><GiMoon />moon roof</li>
						</div>
					</div>	
					</div>
				</div>
            ))}
       </ul>
    );
	
}


export default SearchItem
