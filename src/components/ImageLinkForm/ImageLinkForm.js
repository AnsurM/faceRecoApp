import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
	return(
		<div className = 'ma4 mt0'>
		<p className = 'white f3' style={{
    marginTop: '100px'}}>
		{'This Magic Network will detect faces in your pictures. Give it a try!'}
		</p>
		<p className = 'white f3'> Input any image URL into the input box and press 'Detect' to see the magic!</p>
		<div className = 'center'>
		<div className = 'form1 pa4 br3 shadow-5'>
		<input className = 'f4 pa2 w-70 center' type = 'tex' onChange = {onInputChange}/>
		<button className = 'w-30 grow f4 link dib white bg-light-purple'
		onClick={onButtonSubmit}
		>Detect </button>
		</div>
		</div>
		</div>
		);
}

export default ImageLinkForm