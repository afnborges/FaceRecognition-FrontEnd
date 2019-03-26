import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn){
		return(
			<nav className="fr" style={{display: 'flex', justifyContent: 'flex-end', width: "50%"}}>
				<p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		);
	} else {
		return(
			<nav className="fr" style={{display: 'flex', justifyContent: 'flex-end', width: "50%"}}>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
			</nav>
		);
	}
}

export default Navigation