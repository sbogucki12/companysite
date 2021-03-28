import './services.css';

function Services(props) {
	return  (
		<div id="servicesContainer">
			<div id="servicesContentContainer">
				<div>
					<h1>Services</h1>
				</div>
				<div>
					<h4>Content</h4>
				</div>
			</div>

			<div id="servicesExitButtonContainer">
				<button onClick={() => props.setSliderClassName('closed')}>Close</button>
			</div>
		</div>
	) 
}

export default Services;
