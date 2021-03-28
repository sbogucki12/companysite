import './header.css';
import { useState } from 'react';
import Services from '../services/Services';

function Header() {
	const [sliderClassName, setSliderClassName] = useState('closed');

	return (
		<div id="headerContainer">
			<div id="headerColContainer">
				<div id="headerCol0Container">
					{sliderClassName === 'closed' ? <h1>Logo</h1> : null}
				</div>
				<div id="headerCol1Container">
					{sliderClassName === 'closed' ? (
						<button onClick={() => setSliderClassName('opened')}>Services</button>
					) : null}
				</div>
			</div>

			<div className={`servicesSlider ${sliderClassName}`}>
				<Services setSliderClassName={setSliderClassName} sliderClassName={sliderClassName} />
			</div>
		</div>
	);
}

export default Header;
