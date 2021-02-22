import './App.css';
import { useState } from 'react';
import DesktopBase from './desktop/DesktopBase';

function OldApp() {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	let view = <DesktopBase />;

	window.onresize = function () {
		setViewportWidth(window.innerWidth);
	};

	if (viewportWidth < 450) {
		view = (
			<div>
				<h1>Mobile!</h1>
			</div>
		);
	} else if (viewportWidth >= 450) {
		view = <DesktopBase />;
	}

	return <div>{view}</div>;
}

export default OldApp;
