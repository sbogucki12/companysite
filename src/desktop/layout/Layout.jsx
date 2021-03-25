import React from 'react';
import './layout.css';
import GlobeBackground from './planetBackground.jpg';

function Layout(props) {
	return (
		<div id="layoutContainer">
			<div id="layoutRow0Container">{props.layout.row0}</div>
			<div id="layoutRow1Container">
				<img id="row1imageBackground" src={GlobeBackground} alt="Digital Globe" />
				<div id="row1content">{props.layout.row1}</div>
			</div>
			<div id="layoutRow2Container">{props.layout.row2}</div>
			<div id="layoutRow3Container">{props.layout.row3}</div>
		</div>
	);
}

export default Layout;
