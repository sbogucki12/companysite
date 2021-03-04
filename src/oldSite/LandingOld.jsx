import { useState } from 'react';

const Landing = (props) => {
	const [animation, setAnimation] = useState('');
	return (
		<div id="landingContainer">
			<div id="landingBox" style={{ animationName: animation }}>
				<div>
					<h1>Company Name</h1>
				</div>
				<div>
					<button
						onClick={() => {
							setAnimation('fadeOutOpacity');
							setTimeout(() => {
								props.setDialog('main');
								props.setShowLanding(false);
							}, 1000);
						}}
					>
						Enter
					</button>
				</div>
			</div>
		</div>
	);
};

export default Landing;