import React from 'react';
import FooterMain from './footer/FooterMain';
import TeamCardWidget from './teamCardWidget/TeamCardWidget';
import Layout from './layout/Layout';
import '../app.css';
import './desktopBase.css';

function DesktopBase() {
	return (
		<div>
			<main id="main">
				<Layout
					layout={{
						row0: (
							<div>
								<h2>Row 0</h2>
							</div>
						),
						row1: <TeamCardWidget />,
						row2: (
							<div>
								<h2>Row2</h2>
							</div>
						),
					}}
				/>
			</main>
			<footer id="footer">
				<FooterMain />
			</footer>
		</div>
	);
}

export default DesktopBase;
