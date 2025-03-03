import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' src={imageUrl} alt='' width='500px' height='auto' />
				<div className='bounding-box' style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }} />
			</div>
		</div>
	)
}

export default FaceRecognition;