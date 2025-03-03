import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'If it\'s a face, I can find it!'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} placeholder='paste image URL here!' />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' onClick={onSubmit}>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm