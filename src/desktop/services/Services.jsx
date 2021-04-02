import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import ServicesList from './services.json';

function Services(props) {
	return (
		<div id="servicesContainer">
			<div id="servicesContentContainer">
				<div><FontAwesomeIcon icon={faChevronCircleLeft} className='servicesArrow' /></div>
				<div id='servicesContentCard'>
					<div>{ServicesList[0].icon}</div>
					<div>{ServicesList[0].name}</div>
					<div>{ServicesList[0].summary}</div>
				</div>
				<div><FontAwesomeIcon icon={faChevronCircleRight} className='servicesArrow'/></div>
			</div>
			<div id="servicesExitButtonContainer">
				<button onClick={() => props.setSliderClassName('closed')}>Close</button>
			</div>
		</div>
	);
}

export default Services;
