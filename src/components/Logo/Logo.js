import React from 'react';
import Tilt from 'react-tilt';
import logo from './Logo.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt4'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 90, width: 90 }} >
 				<div className="Tilt-inner pa1"> <img style={{paddingTop:'2px'}} alt='logo' src={logo}/> </div>
			</Tilt>
		</div>
	);
}

export default Logo