import './app.css'
import { useState } from 'react';
import DesktopBase from './desktop/DesktopBase';

function App() {
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

export default App;



/*
import React from 'react';
import { Switch, Route } from "react-router-dom";
import OldApp from './OldApp.jsx';
import NewStyleHome from './newStyle/NewStyleHome';

function App () {
	return (
		<div>
			<Switch>
				<Route exact path="/old">
					<OldApp />
				</Route>
				<Route exact path="/">
					<NewStyleHome />
				</Route>
			</Switch>

		</div>
	)
}; 

export default App; */




