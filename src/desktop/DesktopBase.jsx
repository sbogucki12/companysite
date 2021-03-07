import React from 'react';
import FooterMain from './footer/FooterMain';
import TeamCardWidget from './teamCardWidget/TeamCardWidget';
import '../app.css';
import './desktopBase.css';

function DesktopBase() {
	return (
		<div>
			<main id="main">
                <TeamCardWidget/>
			</main>
			<footer id="footer">
				<FooterMain />
			</footer>
		</div>
	);
}

export default DesktopBase;
