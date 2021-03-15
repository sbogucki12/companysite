import './mainVideoLogo.css';
import MainLogoBgVideo from './mainLogoBgVideo.mp4';

function MainVideoLogo() {
	return (
		<div id="mainVideoLogoContainer">
			<div id="mainVideoLogoBox">
				<video autoPlay muted loop id="mainLogoVideo">
					<source src={MainLogoBgVideo} type="video/mp4" />
				</video>
				<div id='mainLogoContent'>
                    Company Name!
                </div>
			</div>
		</div>
	);
}

export default MainVideoLogo;
