import React from 'react';
import './Logo.css';
import atom from './logo512.png'

const Logo = () => {
	return (
		<div className='ma4 mt0 center'>
			<div className='logo pointer'>
				<img src={atom} alt='atom' />
			</div>
		</div>
	)
}

export default Logo