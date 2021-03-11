import React from 'react';
import './layout.css';

function Layout(props) {
	return (
		<div id="layoutContainer">
			<div id="layoutRow0Container">{props.layout.row0}</div>
			<div id="layoutRow1Container">{props.layout.row1}</div>
			<div id="layoutRow2Container">{props.layout.row2}</div>
		</div>
	);
}

export default Layout;
