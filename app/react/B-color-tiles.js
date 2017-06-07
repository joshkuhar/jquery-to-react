'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Tiles extends React.Component {
	render() {
		// Background color for the tile is passed
		// into the style attribute. The rest of 
		// styling for the div is held in the CSS file. 
		let tiles = this.props.colors.map( (color, index) => {
			return <div
					className='tile'
					style={ {backgroundColor: color} } 
					key={index}
					></div>
		})
		return (
				<div className='tiles'>{tiles}</div>
			)
	}
}

export default Tiles

