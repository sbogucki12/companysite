import React from 'react';
import FooterMain from './footer/FooterMain';
import TeamCardWidget from './teamCardWidget/TeamCardWidget';
import OurCompany from './ourCompany/OurCompany';
import Layout from './layout/Layout';
import '../app.css';
import './desktopBase.css';
import MainVideoLogo from './mainVideoLogo/MainVideoLogo';
import Portfolio from './portfolio/Portfolio';
import Header from './header/Header';

function DesktopBase() {
	return (
		<div>
			<header id="header">
				<Header />
			</header>
			<main id="main">
				<Layout
					layout={{
						row0: <MainVideoLogo />,
						row1: <OurCompany />,
						row2: <TeamCardWidget />,
						row3: <Portfolio />,
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
